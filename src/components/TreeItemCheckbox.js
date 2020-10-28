import styled from "@emotion/styled";
import React from "react";
import Checkbox from "./Checkbox/Checkbox";

const Label = styled.span`
  margin-left: 8px;
  font-size: 16px;
  color: "#7c7c7c";
`;

const TreeItemCheckbox = ({ state, onChange, item }) => {
  return (
    <label>
      <Checkbox checked={state} onChange={onChange} />

      <Label>{item.name}</Label>
    </label>
  );
};

export default TreeItemCheckbox;
