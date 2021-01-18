import React from "react";
import { render, screen } from "../../utils/test-utils";
import Accordion from "./Accordion";

describe("<Accordion />", () => {
  it("should render without crashing", () => {
    const component = render(<Accordion />);

    expect(component).toMatchSnapshot();
  });
});
