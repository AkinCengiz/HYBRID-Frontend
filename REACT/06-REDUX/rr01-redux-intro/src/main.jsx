import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider as ReduxProvider} from "react-redux"
import App from './App.jsx'
import { store } from './store/reduxStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>,
)
