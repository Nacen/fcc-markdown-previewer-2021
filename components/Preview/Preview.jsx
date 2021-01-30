import React, { useEffect } from "react";
import styles from "./Preview.module.scss";

const Preview = ({ htmlData, className }) => {
  return (
    <section className={styles.previewSection}>
      <header className={styles.previewTitle}>
        <h3>Markdown Preview</h3>
      </header>
      <div
        className={`${styles.preview} ${className}`}
        dangerouslySetInnerHTML={{
          __html: htmlData,
        }}
        id="preview"
      />
    </section>
  );
};

export default Preview;
