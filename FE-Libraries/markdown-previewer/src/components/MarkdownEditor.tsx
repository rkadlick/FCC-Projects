// src/components/MarkdownEditor.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateText } from "../redux/editorSlice";
import { RootState } from "../redux/store";

const MarkdownEditor: React.FC = () => {
  const text = useSelector((state: RootState) => state.editor.text);
  const dispatch = useDispatch();

  return (
    <div className="editor-container">
      <h2>Markdown Editor</h2>
      <textarea
        id="editor"
        value={text}
        onChange={(e) => dispatch(updateText(e.target.value))}
      />
    </div>
  );
};

export default MarkdownEditor;
