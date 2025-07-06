import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './main.css'

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!CLERK_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StrictMode>
      <App clerk_key={CLERK_KEY} />
    </StrictMode>
  )
}
