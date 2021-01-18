export const getTreeItems = (store) => {
  return store && store.treeItem ? store.treeItem : [];
};

export const getSelectedItems = (store) => {
  return store && store.selectedItems ? store.selectedItems : {};
};
