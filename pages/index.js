import Head from "next/head";
import MarkdownPreviewer from "../components/MarkdownPreviewer/MarkdownPreviewer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FCC Markdown Previewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>freeCodeCamp Markdown Previewer</h1>
        <MarkdownPreviewer />
      </main>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  );
}
