import React, {useEffect, useState} from "react";
import TreeViewElement from "./TreeViewElement"
import {TreeTransform} from "./types"


const TreeView = (props:{tree: TreeTransform | undefined}) => {
  let {tree} = props;
  const [current, setCurrent] = useState<TreeTransform>();

  if (!tree) {
    return (
      <div>
        No Scene loaded <br/><br/>
        <button className="button1">
          Reload
        </button>
      </div>
    )
  }

  const rootCB = (tt: TreeTransform) => {
    setCurrent(tt);
  }

  return (
    <div>
      <TreeViewElement key={tree.fileID} level={0} node={tree} selected={rootCB}/>
    </div>
  );
}


export default TreeView;
