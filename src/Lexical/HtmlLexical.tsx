import App from "./App";
import * as React from "react"
import {useEffect, useState} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";

const HtmlLexical = React.forwardRef(
  ({className, value, onChange, ...props}, ref) => {
    return <App className={className} value={value} onChange={onChange} />
  }
)
HtmlLexical.displayName = "HtmlLexical"

export {HtmlLexical}
