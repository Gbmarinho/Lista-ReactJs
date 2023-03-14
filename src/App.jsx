import { useState } from 'react'
import './App.css'
import Header from './componentes/header'
import Lista from './componentes/lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <Lista />
    </div>
  )
}

export default App
