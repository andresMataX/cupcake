import { ClerkProvider } from '@clerk/clerk-react'
import { enUS, esMX } from '@clerk/localizations'
import { neobrutalism } from '@clerk/themes'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './main.css'
import { getLocale } from './paraglide/runtime'

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!CLERK_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StrictMode>
      <ClerkProvider
        localization={getLocale() === 'es' ? esMX : enUS}
        publishableKey={CLERK_KEY}
        afterSignOutUrl="/"
        appearance={{
          baseTheme: neobrutalism,
          variables: { colorPrimary: '#000' },
        }}
      >
        <App />
      </ClerkProvider>
    </StrictMode>,
  )
}
