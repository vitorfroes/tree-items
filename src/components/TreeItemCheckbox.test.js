import React from "react";
import TreeItemCheckbox from "./TreeItemCheckbox";
import { render, screen } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("<TreeItemCheckbox />", () => {
  it("should render without crashing", () => {
    const item = {
      name: "Foo Bar",
      id: 0,
    };

    const component = render(<TreeItemCheckbox item={item} />);

    expect(component).toMatchSnapshot();
  });

  it("should render a component with a label", () => {
    const item = {
      name: "Foo Bar",
      id: 0,
    };

    render(<TreeItemCheckbox item={item} />);

    expect(screen.getByText(/foo bar/i)).toBeInTheDocument();
  });

  it("should call a function when it is clicked", () => {
    const item = {
      name: "Foo Bar",
      id: 0,
    };
    const mySpy = jest.fn();

    render(<TreeItemCheckbox item={item} onChange={mySpy} />);

    userEvent.click(screen.getByRole("checkbox"));

    expect(mySpy).toHaveBeenCalled();
  });
});
