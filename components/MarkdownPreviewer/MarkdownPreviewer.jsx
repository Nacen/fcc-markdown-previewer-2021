import React, { useState, useEffect } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import Editor from "../Editor/Editor";
import Preview from "../Preview/Preview";
import defaultMarkdownData from "../../utils/defaultMarkdownData";

import styles from "./MarkdownPreviewer.module.scss";

const MarkdownPreviewer = () => {
  const [editorInput, setEditorInput] = useState(defaultMarkdownData);
  const [sanitizedHTML, setSanitizedHTML] = useState("");

  useEffect(() => {
    marked.setOptions({ gfm: true, breaks: true });
    console.log(sanitizedHTML);
  }, []);

  useEffect(() => {
    setSanitizedHTML(DOMPurify.sanitize(marked(editorInput)));
  }, [editorInput]);

  const handleEditorInputChange = (event) => {
    setEditorInput(event.target.value);
  };

  return (
    <section className={styles.markdownPreviewer}>
      <Editor inputValue={editorInput} handleChange={handleEditorInputChange} />
      <Preview htmlData={sanitizedHTML} />
    </section>
  );
};

export default MarkdownPreviewer;
