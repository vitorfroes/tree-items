import { combineReducers } from "redux";
import treeItem from "./treeItem";
import selectedItems from "./selectedItems";

export default combineReducers({ treeItem, selectedItems });
