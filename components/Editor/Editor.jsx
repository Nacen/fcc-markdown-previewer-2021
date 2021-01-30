import React from "react";
import styles from "./Editor.module.scss";

const Editor = ({ inputValue, handleChange, className }) => {
  return (
    <section className={styles.editorSection}>
      <header>
        <h3 className={styles.editorTitle}>Markdown Editor</h3>
      </header>
      <textarea
        className={`${styles.editor} ${className}`}
        id="editor"
        value={inputValue}
        onChange={handleChange}
      ></textarea>
    </section>
  );
};

export default Editor;
