import React from "react";
import App from "./App";
import { render } from "./utils/test-utils";

describe("<App />", () => {
  it("should render without crashing", () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });
});
