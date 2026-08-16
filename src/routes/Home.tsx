import { marked } from "marked";
import HomeMarkdown from "../markdown/home.md?raw";
import Nav from "../components/Nav.tsx";

const Home = () => {
  return (
    <>
      <div class="animate-camera-flash pointer-events-none fixed inset-0 z-50" />
      <header>
        <Nav />
      </header>
      <main class="Home">
        <span innerHTML={marked.parse(HomeMarkdown) as string} />
      </main>
    </>
  )
}

export default Home
