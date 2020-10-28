import React, { useState } from "react";
import { StyledTree } from "./commons";
import TreeItemCheckbox from "./TreeItemCheckbox";
import styled from "@emotion/styled";
import Accordion from "./Accordion/Accordion";

const StyledItem = styled.li`
  display: flex;
  justify-content: flex-start;
`;

const TreeItem = ({ item }) => {
  const [state, setState] = useState(
    () => window.localStorage.getItem(item.id) || false
  );

  const handleChange = (event) => {
    event.target.checked
      ? window.localStorage.setItem(item.id, event.target.checked)
      : window.localStorage.removeItem(item.id);
    setState(event.target.checked);
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
            onChange={handleChange}
            onClick={handleClick}
            item={item}
          />
        }
        content={
          <StyledTree>
            {item.children &&
              Object.values(item.children).map((child) => (
                <TreeItem item={child} key={child.id} />
              ))}
          </StyledTree>
        }
      />
    </StyledItem>
  );
};

export default TreeItem;
