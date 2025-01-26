import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductContextProvider } from './contexts/ProductContext.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
