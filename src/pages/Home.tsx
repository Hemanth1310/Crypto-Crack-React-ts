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


    useEffect(()=>{
        const fetchData = async() =>{
            const res =await fetch(`${BASE_URL}?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=250&page=1&price_change_percentage=1h,24h,7d&x_cg_demo_api_key=${API_KEY}`)
            const response= ( await res.json()) as CryptoData[]
            console.log(response)
            setCryptoData(response)
        }   
        fetchData()

    },[selectedCurrency])

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
                    <div className='border-2 border-white rounded-4xl p-5 w-full'>
                        <input className='bg-none text-xl text-white'></input>
                    </div>
        </div>
        <CoinsList cryptoData={cryptoData.slice(0,50)}/>
    </div>
  )
}

export default Home