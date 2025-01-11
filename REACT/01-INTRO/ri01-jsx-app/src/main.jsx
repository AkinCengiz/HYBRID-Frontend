import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateManagement from './StateManagement'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StateManagement/>
  </StrictMode>,
)
