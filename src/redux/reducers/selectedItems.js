import { actionTypes } from "../actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_ITEM:
      console.log({ payload: action.payload });
      console.log({ state: state });
      return { ...action.payload.selectedItems, ...state };
    default:
      return state;
  }
}
