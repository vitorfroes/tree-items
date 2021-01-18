import userEvent from "@testing-library/user-event";
import React from "react";
import { render, screen } from "../utils/test-utils";
import TreeItem from "./TreeItem";

describe("<TreeItem />", () => {
  it("should render without crashing", () => {
    const item = {
      name: "Foo Bar",
      id: 0,
    };
    const component = render(<TreeItem item={item} />);

    expect(component).toMatchSnapshot();
  });

  it("should change checkbox state when clicked", () => {
    const item = {
      name: "Foo Bar",
      id: 0,
    };

    const selectedItems = {};
    const handleItems = jest.fn();

    render(
      <TreeItem
        item={item}
        selectedItems={selectedItems}
        handleItems={handleItems}
      />
    );

    userEvent.click(screen.getByRole("checkbox"));

    expect(handleItems).toHaveBeenCalled();
  });
});
