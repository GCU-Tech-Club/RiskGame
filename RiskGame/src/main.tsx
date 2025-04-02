import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import { Router } from './navigation/Router.tsx'
import { Navbar } from './navigation/Navbar'
import { Footer } from './navigation/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="bg-neutral-950 text-white min-h-screen flex flex-col">
        <Navbar />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
