import { marked } from "marked";
import RulesMarkdown from "../markdown/rules.md?raw";
import Nav from "../components/Nav.tsx";

const Rules = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main class="Rules">
        <span innerHTML={marked.parse(RulesMarkdown) as string} />
      </main>
    </>
  );
}

export default Rules
