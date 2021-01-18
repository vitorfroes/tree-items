import React from "react";
import { render } from "../../utils/test-utils";
import Checkbox from "./Checkbox";

describe("<Checkbox />", () => {
  it("should render without crashing", () => {
    const component = render(<Checkbox />);

    expect(component).toMatchSnapshot();
  });
});
