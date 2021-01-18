import { actionTypes } from "../actionTypes";

export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.TOGGLE_ITEM:
      return state;
    case actionTypes.GET_ITEM:
      return action.payload.treeItem;
    default:
      return state;
  }
}
