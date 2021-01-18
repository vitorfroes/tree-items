import { actionTypes } from "./actionTypes";
import decodeContent, { fetchTreeItems } from "../utils/api";
import selectedItems from "./reducers/selectedItems";

const getItemAction = (data) => ({
  type: actionTypes.GET_ITEM,
  payload: { treeItem: decodeContent(data) },
});

export const getItem = () => {
  return (dispatch) => {
    return fetchTreeItems().then((data) => dispatch(getItemAction(data)));
  };
};

export const toggleItem = (item) => ({
  type: actionTypes.TOGGLE_ITEM,
  payload: { ...item },
});

export const setSelectedItems = (selectedItems) => ({
  type: actionTypes.SET_SELECTED_ITEM,
  payload: { ...selectedItems },
});
