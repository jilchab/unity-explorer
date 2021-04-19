import React, { useState, useEffect } from "react";
import { TreeTransform }  from "./types";
import arrow from "./tree-arrow.png"

const TreeViewElement = (props: {level: number, node: TreeTransform, selected: (tt: TreeTransform) => void }) => {
  const {level, node, selected} = props;
  const [isOpen, setOpen] = useState<boolean>(node.isOpen);


  const toggleView = () => {
    node.isOpen = !node.isOpen;
    setOpen(!isOpen);
  }

  const select = () => {
    node.select();
    selected(node);
  }

  const padLeft = (node.children.length > 0 ? level * 20 - 5 : level * 20).toString() + "px";
  
  let nodeStyle = {
    display: 'flex',
    backgroundColor: node.isSelected ? "grey": "",
    padding: "2px 0",
    paddingLeft:padLeft
  }

  let arrowStyle = {
    width:"10px",
    transform: "rotate(".concat(node.isOpen ? "180deg)" : "90deg)")
  };

  return (
    <div>
      <div style={nodeStyle}>
        {node.children.length > 0 &&
          <div style={{padding:"0px 5px", cursor: 'pointer'}} onClick={toggleView}>
            <img src={arrow} alt=">" style={arrowStyle}/>
          </div>
         }
        
        <div style={{cursor: 'pointer', flexGrow:100}} onClick={select}>
          {node.gameobjectName}
        </div>
      </div>
      { (node.isOpen) ?
          node.children.map(t  => {
            return <TreeViewElement key={t.fileID} level={level + 1} node={t} selected={selected}/>
          }) : undefined
      }
    </div>
    
  );
}





export default TreeViewElement;
