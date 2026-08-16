import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './shadcn/ui/dropdown-menu.tsx';
import { A, Navigate } from '@solidjs/router';

const Nav = () => {
  return (
    <>
      <A href="/">
        <img src="/the-great-show/logo.png" alt="logo" />
        <div>
          <h1>The Great Show</h1>
          <h2>Season 26</h2>
        </div>
      </A>
      <nav>
        <ul>
        <li><A href="/">Home</A></li>
          <li><A href="/rules">Rules</A></li>
          <li><A href="/history">History</A></li>
        </ul>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger class="dropdown-trigger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40" height="40" viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-menu-icon lucide-menu">
            <path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="dropdown-content">
          <DropdownMenuItem as="a" href="/" class="dropdown-item"
            onSelect={() => {
              Navigate({ href: import.meta.env.BASE_URL }) 
          }}>
            Home
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem as="a" href="/rules" class="dropdown-item" onSelect={() => {
            Navigate({ href: `${import.meta.env.BASE_URL}/rules` })  
          }}>
            Rules
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem as="a" href="/history" class="dropdown-item" onSelect={() => {
            Navigate({ href: `${import.meta.env.BASE_URL}/history` })
          }}>
            History
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Nav
