import React, { useEffect, useState } from 'react'
import type { CryptoData } from '../Types';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router';
import { handleCurrency } from '../Context/SelectedCurrencyContext';
import CoinsList from '../Components/CoinsList';

type Props = {}

const BASE_URL = import.meta.env.VITE_API_URL_Crypto;
const API_KEY = import.meta.env.VITE_API_ENDPOINT;

const Home = (props: Props) => {
    const [cryptoData,setCryptoData] = useState<CryptoData[]>([])
    const TrendingCryptos = cryptoData.slice(0,3) 
    const {selectedCurrency} = handleCurrency()
    const [searchInput,setSearchInput] = useState<string>('')
    const [searchResults, setSearchResults] = useState<CryptoData[]>([])

    useEffect(()=>{
        const fetchData = async() =>{
            const res =await fetch(`${BASE_URL}?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=250&page=1&price_change_percentage=1h,24h,7d&x_cg_demo_api_key=${API_KEY}`)
            const response= ( await res.json()) as CryptoData[]
            console.log(response)
            setCryptoData(response)
        }   
        fetchData()

    },[selectedCurrency])

    useEffect(()=>{
        const results :CryptoData[] = cryptoData.filter((entry)=>entry.name.toLowerCase().includes(searchInput.toLocaleLowerCase()))
        setSearchResults(results)
    },[searchInput,cryptoData])

    return (
    <div className='container'>
        <div className='w-full rounded-3xl bg-cyan-950 flex flex-col items-center p-4 lg:p-10 gap-4'>
            <div className='text-2xl md:text-8xl text-white'>CryptoCrack</div>
             <div className='text-sm md:text-2xl text-white opacity-50'>Get All the Detials of your favroite Cryptos here</div>
            <div className='flex w-full flex-col lg:flex-row items-center justify-around'>
                {TrendingCryptos.map((coin)=>(
                <div key={coin.id} className='flex flex-col items-center justify-center'>
                    <img className='h-16 md:h-24 lg:h-42' src={coin.image}></img>
                    <div className='text-white text-sm lg:text-2xl'>{coin.name}</div>
                     <div className='text-white text-sm lg:text-xl font-light'>Market Cap: ${coin.market_cap}</div>
                    <div className='text-white text-sm lg:text-xl font-bold'><b>Rank:#{coin.market_cap_rank}</b></div>
                </div>))}
            </div>
        </div>
        <div className='w-full flex flex-col items-center justify-between py-10 px-5 md:px-14 lg:px-24 gap-4'>
                    <h1 className='text-4xl text-white'>List of Active Cryptos</h1>
                    <div className='w-full flex items-center border-white rounded-2xl px-5 py-2 border-2'>
                        <input type='text' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className='bg-none w-full text-white text-2xl focus:outline-none'></input>
                        <span style={{fontSize:'50px',color:'#fff'}} className="material-symbols-outlined">
                            search
                        </span>
                    </div>
                    
        </div>
        <CoinsList cryptoData={searchResults.slice(0,50)}/>
    </div>
  )
}

export default Home