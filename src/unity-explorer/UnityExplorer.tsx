import React, {useEffect, useState} from "react";
import SplitterLayout from "react-splitter-layout";
import TreeView from "./TreeView"

const UnityExplorer = () => {

  const [text, setText] = useState<string>('default text')

  const handleMessage = (event: MessageEvent) => {
    setText(event.data.text as string);
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);


  return (
    <div>
      <SplitterLayout
        percentage
        primaryMinSize={33}
        secondaryMinSize={33}
      >
        <div>
          <TreeView/>
        </div>
        <div style={{padding:"5px"}}>
          <Button text={text}/>
        </div>
      </SplitterLayout>
    </div>
  );
}

const Button = (props: {text: string}) => {
  const {text} = props;
  return (
    <button className="button1">
      {text}
    </button>
  )
}

// const vscode = (global as any).acquireVsCodeApi();
// const alert = (message: string) => {
//   vscode.postMessage({
//       command: 'alert',
//       payload: `${message}`
//   });
//}

export default UnityExplorer;
