import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoginProvider } from './context/LoginContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <LoginProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </LoginProvider>
  </StrictMode>,
)
