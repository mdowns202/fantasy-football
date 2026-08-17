import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [deno(), solid(), tailwindcss()],
  base: "/the-great-show/", 
  server: {
    host: "10.100.0.3",
    port: 8202,
  },
})
