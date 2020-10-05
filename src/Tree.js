import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import decodeContent, { fetchTreeItems } from "./api";
import TreeItem from "./TreeItem";

const useStyles = makeStyles((theme) => ({
  root: {
    listStyleType: "none",
    width: "100%",
    padding: 0,
    margin: 0
  }
}));

const Tree = () => {
  const classes = useStyles();

  const [treeItems, setTreeItems] = useState(null);

  useEffect(() => {
    fetchTreeItems().then((data) => {
      setTreeItems(decodeContent(data));
    });
  }, []);

  return (
    <ul className={classes.root}>
      {treeItems && treeItems.map((item) => <TreeItem item={item} />)}
    </ul>
  );
};

export default Tree;
