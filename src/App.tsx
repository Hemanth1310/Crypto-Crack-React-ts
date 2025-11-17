import { useState } from 'react'
import { BrowserRouter } from 'react-router'
import Header from './Components/Header'
import Home from './pages/Home'
import { SelectedCurrencyContextProvider } from './Context/SelectedCurrencyContext'
function App() {
  const [count, setCount] = useState(0)

  return (
  <SelectedCurrencyContextProvider>
    <BrowserRouter>
        <Header/>
        <div className='w-screen min-h-screen bg-cyan-900 pt-[60px] flex flex-col items-center'>
            <Home/>
        </div>
    </BrowserRouter>
   </SelectedCurrencyContextProvider>
  )
}

export default App
