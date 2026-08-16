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
      <Router>
        <Route path="/" component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/history" component={History} />
      </Router>
    </Suspense>
  ),
  wrapper
);
