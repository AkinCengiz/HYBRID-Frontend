import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CardContextProvider } from './contexts/CardContext.jsx'
import { ColorContextProvider } from './contexts/ColorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardContextProvider>
      <ColorContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ColorContextProvider>
    </CardContextProvider>
  </StrictMode>
)
