import { BrowserRouter, Route,Routes } from 'react-router'
import Header from './Components/Header'
import Home from './pages/Home'
import { SelectedCurrencyContextProvider } from './Context/SelectedCurrencyContext'
import CoinDetails from './pages/CoinDetails'
function App() {
  return (
  <SelectedCurrencyContextProvider>
    <BrowserRouter>
        <Header/>
        
        <div className='w-screen min-h-screen bg-cyan-900 pt-[120px] pb-10 flex flex-col items-center'>
          <Routes>
            <Route path='/'element={<Home/>}></Route>
            <Route path='/coin/:id' element={<CoinDetails/>}/>
          </Routes>
        </div>
    </BrowserRouter>
   </SelectedCurrencyContextProvider>
  )
}

export default App
