import { createShallow } from "@material-ui/core/test-utils";
import { ShallowWrapper } from "enzyme";
import { Omit } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import { PageGroup, PSidebar } from "../types";
import Sidebar from "../Sidebar";
import SidebarMenu from "../SidebarMenu";

let wrapper: ShallowWrapper;
let shallow = createShallow({ dive: true });

const pages: Array<PageGroup> = [
  { icon: Edit, groupName: "Index", pages: [{ name: "home", to: "/" }] },
  { icon: Edit, groupName: "About", pages: [{ name: "about", to: "about" }] }
];

describe("Sidebar UI Test", () => {
  let props: Omit<PSidebar, "classes">;

  beforeEach(() => {
    props = {
      pageGroups: pages,
      onToggleRwd: jest.fn()
    };
    wrapper = shallow(<Sidebar {...props} />);
  });

  it("component snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("should contain 4 SidebarMenu", () => {
    expect(wrapper.find(SidebarMenu)).toHaveLength(4);
  });
});
