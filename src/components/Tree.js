import React, { useEffect, useState } from "react";
import decodeContent, { fetchTreeItems } from "../utils/api";
import { StyledTree } from "./commons";
import TreeItem from "./TreeItem";

const Tree = () => {
  const [treeItems, setTreeItems] = useState(null);

  useEffect(() => {
    fetchTreeItems().then((data) => {
      setTreeItems(decodeContent(data));
    });
  }, []);

  return (
    <StyledTree>
      {treeItems &&
        treeItems.map((item) => <TreeItem item={item} key={item.id} />)}
    </StyledTree>
  );
};

export default Tree;
