import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstComponent from './firstcomponent'
import SecondComponent from './SecondComponent'
import './App.css'
import ClassComponent from './ClassComponent'
import ArrowFunctionComponent from './ArrowFunctionComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FirstComponent/>
    <h1>First App</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        YMYP First React Page
      </p>
      <SecondComponent/>
      <ClassComponent/>
      <ArrowFunctionComponent/>
    </>
  )
}

export default App
