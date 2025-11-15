import { useState } from 'react'
import { BrowserRouter } from 'react-router'
import Header from './Components/Header'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
      <Header/>
      <div className='w-screen min-h-screen bg-cyan-900 pt-[60px] flex flex-col items-center'>
          <Home/>
      </div>
   </BrowserRouter>
  )
}

export default App
