import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItem, setSelectedItems } from "../redux/actions";
import { getTreeItems, getSelectedItems } from "../redux/selectors";
import { StyledTree } from "./commons";
import TreeItem from "./TreeItem";

const Tree = ({ treeItem, selectedItems, getItem, setSelectedItems }) => {
  useEffect(() => {
    getItem();
  }, [getItem]);

  return (
    <StyledTree>
      {treeItem &&
        treeItem.map((item) => (
          <TreeItem
            item={item}
            selectedItems={selectedItems}
            key={item.id}
            handleItems={(selectedItems) => setSelectedItems(selectedItems)}
          />
        ))}
    </StyledTree>
  );
};

const mapStateToProps = (state) => {
  const items = getTreeItems(state);
  const selectedItems = getSelectedItems(state);

  return { treeItem: items, selectedItems };
};

export default connect(mapStateToProps, { getItem, setSelectedItems })(Tree);
