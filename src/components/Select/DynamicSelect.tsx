import React from "react";
import deepEqual from "lodash.isequal";

import { PDynamicSelect, SDynamicSelect, SelectOption, DynamicSelectFilters } from "./types";
import Select from "./Select";

class DynamicSelect extends React.Component<PDynamicSelect, SDynamicSelect> {
  static defaultProps = {
    filters: {},
    all: true,
    allValue: "all"
  };

  constructor(props: PDynamicSelect) {
    super(props);
    this.state = {
      options: []
    };
  }

  getOptions = () => {
    const { name, value, data, valueColumn, all, allValue, onChangeByFilter } = this.props;
    const filters = this.props.filters as DynamicSelectFilters;
    const labelColumn = this.props.labelColumn || valueColumn;
    const keys = Object.keys(filters);

    // get filted data.
    const dataFilted = data.filter(d => {
      return keys.every(key => {
        if (filters[key] === allValue) {
          return true;
        }
        return d[key] === filters[key];
      });
    });

    // generate options.
    let optionValues: Array<any> = new Array();
    let options: Array<SelectOption> = new Array();
    dataFilted.forEach(d => {
      if (!optionValues.includes(d[valueColumn])) {
        optionValues.push(d[valueColumn]);
        options.push({ value: d[valueColumn], label: d[labelColumn] });
      }
    });

    // change value if next options doesn't include prev value.
    if (!optionValues.includes(value)) {
      const newValue = optionValues[0];
      onChangeByFilter({ target: { name, value: newValue } });
    }

    // sorting, keep options' order consistent.
    options.sort((a, b) => {
      if (all && a.value === allValue) {
        return -1;
      } else if (a.value < b.value) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ options });
  };

  componentDidMount = () => {
    this.getOptions();
  };

  componentDidUpdate = (prevProps: PDynamicSelect) => {
    const prev = { data: prevProps.data, filters: prevProps.filters };
    const next = { data: this.props.data, filters: this.props.filters };
    if (!deepEqual(next, prev)) {
      this.getOptions();
    }
  };

  render = () => {
    const { data, filters, valueColumn, labelColumn, onChangeByFilter, ...SelectProps } = this.props;
    const { options } = this.state;
    return <Select {...SelectProps} options={options} multiple={false} />;
  };
}

export default DynamicSelect;
