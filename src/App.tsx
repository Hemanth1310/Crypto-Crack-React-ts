import { useState } from 'react'
import { BrowserRouter } from 'react-router'
import Header from './Components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
      <Header/>
   </BrowserRouter>
  )
}

export default App
