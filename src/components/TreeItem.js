import React, { useEffect, useState } from "react";
import { StyledTree } from "./commons";
import TreeItemCheckbox from "./TreeItemCheckbox";
import styled from "@emotion/styled";
import Accordion from "./Accordion/Accordion";

const StyledItem = styled.li`
  display: flex;
  justify-content: flex-start;
`;

const TreeItem = ({ item, selectedItems, handleItems }) => {
  const [state, setState] = useState(
    () => Boolean(window.localStorage.getItem(item.id)) || false
  );

  useEffect(() => {
    if (Boolean(window.localStorage.getItem(item.id))) {
      selectedItems[item.id] = {};
      handleItems();
    }
  }, []);

  const handleChange = (event, id) => {
    event.target.checked
      ? window.localStorage.setItem(item.id, event.target.checked)
      : window.localStorage.removeItem(item.id);
    setState(event.target.checked);

    if (selectedItems[id]) {
      delete selectedItems[id];
    } else {
      selectedItems[id] = {};
    }

    handleItems(selectedItems);
  };

  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <StyledItem key={item.id}>
      <Accordion
        title={
          <TreeItemCheckbox
            state={state}
            onChange={(e) => handleChange(e, item.id)}
            onClick={handleClick}
            item={item}
          />
        }
        content={
          <StyledTree>
            {item.children &&
              Object.values(item.children).map((child) => (
                <TreeItem
                  item={child}
                  key={child.id}
                  selectedItems={
                    selectedItems[item.id]
                      ? selectedItems[item.id]
                      : selectedItems
                  }
                  handleItems={(subItems) => handleItems(subItems)}
                />
              ))}
          </StyledTree>
        }
      />
    </StyledItem>
  );
};

export default TreeItem;
