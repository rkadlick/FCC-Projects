// src/components/MarkdownPreview.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { marked } from "marked";

// Configure marked to interpret newlines as <br> tags
marked.setOptions({
  breaks: true, // Enables newlines to be converted into <br> elements
  gfm: true, // Enables GitHub Flavored Markdown
});

const MarkdownPreview: React.FC = () => {
  const text = useSelector((state: RootState) => state.editor.text);

  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      />
    </div>
  );
};

export default MarkdownPreview;
