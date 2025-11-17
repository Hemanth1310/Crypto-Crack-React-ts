import React, { useEffect, useState } from 'react'
import type { Currency } from '../Types'
import { handleCurrency } from '../Context/SelectedCurrencyContext';


const BASE_URL = import.meta.env.VITE_API_URL_Currency;
const API_KEY = import.meta.env.VITE_API_ENDPOINT;

const Header = () => {
    const [supportedCurrencies,setSupportedCurrencies] = useState<Currency[]>([])
    const {selectedCurrency,handleCurrencyChange} = handleCurrency()

    const handleSelection = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        handleCurrencyChange(e.target.value)
    }

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
    <div className='w-screen h-[60px] flex items-center justify-center fixed'>
        <div className='container flex items-center justify-between'>
            <div className='text-2xl text-white'>CryptoCrack</div>
            <div>
                <select value={selectedCurrency} onChange={handleSelection} 
                className="block w-full rounded-md border-cyan-500 border-2 shadow-sm py-2 px-3 
                   focus:none sm:text-sm md:text-xl text-white">
                    {supportedCurrencies.map((currency,index)=><option key={index} value={currency} className='text-xl text-white'>{currency.toUpperCase()}</option>)}
                </select>
            </div>
        </div>
    </div>
  )
}

export default Header