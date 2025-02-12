import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import './App.css'

function App() {

  return (
    <>
    <div className="app">
      <h1>Markdown Previewer</h1>
      <div className="container">
        <MarkdownEditor />
        <MarkdownPreview />
      </div>
    </div>
    </>
  )
}

export default App
