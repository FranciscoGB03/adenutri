import React, { useState } from "react";
// Components
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

//css
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorW = ({titulo='',setData}) => {
  const [editorState,setEditorState]=useState(EditorState.createEmpty());

  const onChange=editorState=>{
    setEditorState(editorState);
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    let comentario=draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(comentario)
    setData(comentario);
  }
  const clearComent=()=>{
    setEditorState(EditorState.createEmpty());
  }
  
  return (
    <div>
      <div className="text-center"><h1>{titulo}</h1></div>
      <div className="container-editor">
        <Editor      
          name="prueba"    
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          onEditorStateChange={onChange}        
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" onClick={()=>clearComent()} className="btn btn-outline-danger mt-3 mr-5 px-5">Cancelar</button>

        <button type="button" onClick={(e)=>onSubmit(e)} className="btn btn-outline-success mt-3 px-5">Guardar</button>
      </div>
    </div>
  );
};

export default EditorW;