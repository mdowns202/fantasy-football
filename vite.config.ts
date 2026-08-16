import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [deno(), solid(), tailwindcss()],
  base: "/fantasy-football/", 
  server: {
    host: "10.100.0.3",
    port: 8202,
  },
})
