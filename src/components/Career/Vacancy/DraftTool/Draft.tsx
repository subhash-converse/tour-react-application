
import React from "react";
import { EditorState, RichUtils, convertFromHTML, convertFromRaw, ContentState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createImagePlugin from "@draft-js-plugins/image";
import { BlockStyleControls, InlineStyleControls } from "./DraftTool"
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import Addjobvacancy from "../AddJob";
import { convertToRaw} from 'draft-js';
import { useEffect } from "react";

interface datas{
  id:number,
  field : string,
  data : string,
  formData:any,
  setFormData:any
} 

const imagePlugin = createImagePlugin();

function DraftEditor(props:datas) {
  const [editorState, setEditorState] = React.useState(() => {
    if (props.id && props.data) { 
      return EditorState.createWithContent(convertFromRaw(JSON.parse(props.data)));
    } else {
      return EditorState.createEmpty();
    } 
  });


  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const draftEditer = (event:any) =>{

    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');


    props.setFormData({...props.formData, [props.field]: value})
    setEditorState(event)
}



  return (
    <div className="App">
      <div className="editor__container">
        <div className="toolbar">
          <BlockStyleControls
            editorState={editorState}
            onToggle={toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
        </div>
        <div className="editor h-[150px] xl:h-[200px] "  >
          <Editor
        
            editorState={editorState}
            onChange={draftEditer}
            plugins={[imagePlugin]}
          />
        </div>
      </div>
    </div>
  );
}
export default DraftEditor;