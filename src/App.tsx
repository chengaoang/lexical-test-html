import {HtmlLexical} from "./Lexical/HtmlLexical";
import {useRef} from "react";

function App() {
  const viewRef = useRef(null)
  const testHtml = `
    <ul><li value="1"><span style="white-space: pre-wrap;">a test project</span></li></ul>
  `;
  function onChange (htmlStr){
    if (viewRef.current){
      viewRef.current.innerHTML = htmlStr;
    }
  }
  return (
    <div className={'htmlEditor__container'}>
      <HtmlLexical className={'htmlEditor__editor'} value={testHtml} onChange={onChange}/>
      <div className={'htmlEditor__view'} ref={viewRef}/>
    </div>
  )
}

export default App
