import React from "react";

const TreeItemCheckbox = ({ state, onChange, item }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={state}
        onChange={onChange}
        name={item.id}
      />

      <span>{item.name}</span>
    </label>
  );
};

export default TreeItemCheckbox;
