import React from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TextEditor  from '../../../template/TextEditor';
const Recomendaciones = () => {
 console.log(TextEditor)
    return (
        <div>
          <div className="form-group">
          <h1 className="m-4">Recomendaciones</h1>
          <TextEditor></TextEditor>
            </div>
        </div>
    )
}

export default Recomendaciones

