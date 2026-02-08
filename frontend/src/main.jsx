import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} 
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#4f46e5', 
          colorBackground: '#0a0a0a', 
          colorText: 'white'
        }
      }}
   >
    <App />
   </ClerkProvider>
  </BrowserRouter>,
)
