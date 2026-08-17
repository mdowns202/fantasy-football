/* @refresh reload */
import './index.css'
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import { Suspense } from "solid-js";
import Home from "./routes/Home.tsx";
import Rules from "./routes/Rules.tsx";
import History from "./routes/History.tsx";

const wrapper = document.getElementById('root')

if (!wrapper) {
  throw new Error('Could not find root element')
}

render(
  () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Router base={import.meta.env.BASE_URL}>
        <Route path="/" component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/history" component={History} />
      </Router>
      <footer class="container flex flex-col items-center justify-center gap-2">
        <span class="font-light text-gray-500 text-center text-xs">
          &copy; 2026 The Great Show
        </span>
        <span class="text-gray-500 text-center text-sm">
          In memory of Raouf 'Big Ra' Abdullah
        </span>
        <span class="my-12 border-b w-1/3"></span>
      </footer>
    </Suspense>
  ),
  wrapper
);
