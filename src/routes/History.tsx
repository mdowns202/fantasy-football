import { marked } from "marked";
import HistoryMarkdown from "../markdown/history.md?raw";
import Nav from "../components/Nav.tsx";

const History = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main class="History">
        <span innerHTML={marked.parse(HistoryMarkdown) as string} />
      </main>
    </>
  );
}

export default History
