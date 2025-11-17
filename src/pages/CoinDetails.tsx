import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { CoinDetailData } from '../Types';

type Props = {}



const API_KEY = import.meta.env.VITE_API_ENDPOINT;



const CoinDetails = (props: Props) => {
    const {id} = useParams()
    const [coinData,setCoinData] = useState<CoinDetailData>()

    

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${API_KEY}`)
                if(!response.ok){
                    throw new Error('Unable to fetch data')
                }else{
                    const resp = await response.json()
                    console.log(resp)
                    setCoinData(resp)
                }
            }catch(error){
            throw new Error('Failed to fetch'+error)
            }
            
        }
        fetchData()
    },[id])


  return (
   <div className="container w-full bg-white rounded-2xl p-10 flex items-center">
        <div className='flex flex-col items-center'>
            <img src={coinData?.image.large}></img>
             <h1 className='text-2xl'>{coinData?.name}-{coinData?.symbol}</h1>
             <div>Current Price: ${coinData?.market_data.current_price.usd}</div>
             <div>Market Cap: ${coinData?.market_data.market_cap.usd}</div>
             
        </div>
        <div className='h-full min-w-3 bg-blue-300'></div>
        <div>
               
           
        </div>
   </div>
  )
}

export default CoinDetails