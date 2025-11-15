import { useEffect, useState } from 'react'
import type { Currency } from '../Types'


const BASE_URL = import.meta.env.VITE_API_URL_Currency;
const API_KEY = import.meta.env.VITE_API_ENDPOINT;

const Header = () => {
    const [supportedCurrencies,setSupportedCurrencies] = useState<Currency[]>([])
    const [selectedCurrency,setSelectedCurrency] = useState<Currency>()
    
    useEffect(()=>{
        const fetchData=async()=>{
            const res =await fetch(`${BASE_URL}${API_KEY}`)
            const response=  await res.json()
            console.log(response+'fjdks')
            setSupportedCurrencies(response)
        }
        fetchData()
      console.log(supportedCurrencies+'fjdks')
    },[])
  return (
    <div className='w-screen h-[60px] bg-cyan-950 flex items-center justify-center fixed'>
        <div className='container '>
            <div className='text-2xl text-white'>CryptoCrack</div>
            <div></div>
        </div>
    </div>
  )
}

export default Header