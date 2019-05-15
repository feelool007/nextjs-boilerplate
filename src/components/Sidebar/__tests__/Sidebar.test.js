import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

import Sidebar from "../Sidebar";
import SidebarMenu from "../SidebarMenu";

let wrapper;
let shallow = createShallow({ dive: true });

const pages = [
  { group_name: "Index", pages: [{ name: "首頁", to: "/" }] },
  { group_name: "About", pages: [{ name: "關於", to: "/about" }] }
];

describe("Sidebar UI Test", () => {
  let props;

  beforeEach(() => {
    props = {
      pages: pages
    };
    wrapper = shallow(<Sidebar {...props} />);
  })

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("should contain 2 SidebarMenu", () => {
    expect(wrapper.find(SidebarMenu)).toHaveLength(2);
  });
});
