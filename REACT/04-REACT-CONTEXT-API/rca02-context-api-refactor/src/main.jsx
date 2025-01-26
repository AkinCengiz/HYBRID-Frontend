import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { ProductContextProvider } from './contexts/ProductContext.jsx';
import { CategoryContextProvider } from './contexts/CategoryContext.jsx';
//import { CategoryContextProvider } from './contexts/CategoryContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContextProvider>
      <CategoryContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CategoryContextProvider>
    </ProductContextProvider>
  </StrictMode>,
)
