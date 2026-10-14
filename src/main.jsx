import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './tailwind.css'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const tree = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The production build prerenders real markup into #root, so hydrate it (React
// reuses that HTML instead of throwing it away). In dev, or if the prerender
// step was skipped, fall back to a normal client render.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
