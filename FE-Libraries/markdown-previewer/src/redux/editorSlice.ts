// src/redux/editorSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialMarkdown: string = `# Markdown Previewer  
## This is a sub-heading  
[Click me!](https://www.google.com)  
\`inline code\`  
\`\`\`  
// Code block  
console.log("Hello, world!");  
\`\`\`  
- List item  
> Blockquote  
![Image](https://via.placeholder.com/150)  
**Bold text**  
`;

interface EditorState {
  text: string;
}

const initialState: EditorState = {
  text: initialMarkdown,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { updateText } = editorSlice.actions;
export default editorSlice.reducer;
