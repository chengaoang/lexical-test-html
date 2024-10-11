import {$generateHtmlFromNodes} from '@lexical/html';
import {useLayoutEffect} from 'react';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';

export function HtmlPlugin({onChange}) {
  const [editor] = useLexicalComposerContext();
  const editorState = editor.getEditorState()

  useLayoutEffect(()=>{
    if (onChange) {
      let htmlString = '';
      editorState.read(() => {
        htmlString = $generateHtmlFromNodes(editor);
      });
      onChange(htmlString);
    }
  }, [editor, editorState, onChange])

  return null;
}
