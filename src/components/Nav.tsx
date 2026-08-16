import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './shadcn/ui/dropdown-menu.tsx';
import { Navigate } from '@solidjs/router';

const Nav = () => {
  return (
    <>
      <a href="/">
        <img src="/logo.png" alt="logo" />
        <div>
          <h1>The Great Show</h1>
          <h2>Season 26</h2>
        </div>
      </a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/rules">Rules</a></li>
          <li><a href="/history">History</a></li>
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
              Navigate({ href: '/' }) 
          }}>
            Home
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem as="a" href="/rules" class="dropdown-item" onSelect={() => {
            Navigate({ href: '/rules' })  
          }}>
            Rules
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem as="a" href="/history" class="dropdown-item" onSelect={() => {
            Navigate({ href: '/history' })
          }}>
            History
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Nav
