import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { CoinDetailData } from '../Types';
import HistoricalData from '../Components/HistoricalData';

const API_KEY = import.meta.env.VITE_API_ENDPOINT;
const BASE_URL = import.meta.env.VITE_API_URL_COIN_DETAILS


const CoinDetails = () => {
    const {id} = useParams()
    const [coinData,setCoinData] = useState<CoinDetailData>()

    

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch(`${BASE_URL}/${id}?x_cg_demo_api_key=${API_KEY}`)
                if(!response.ok){
                    throw new Error('Unable to fetch data')
                }else{
                    const resp = (await response.json()) as CoinDetailData
                    setCoinData(resp)
                }
            }catch(error){
                console.log('Failed to fetch'+error)
            }
            
        }
        fetchData()
    },[id])


  return (
   <div className="container w-full bg-white rounded-2xl p-4 lg:p-10 flex items-center flex-col lg:flex-row">
        <div className='flex flex-col items-center px-4 lg:px-10 flex-1'>
            <img src={coinData?.image.large} className='h-10 lg:h-32'></img>
             <h1 className='text-2xl'>{coinData?.name}-{coinData?.symbol}</h1>
             <div><b>Current Price: </b>${coinData?.market_data.current_price.usd}</div>
             <div><b>Market Cap: </b>${coinData?.market_data.market_cap.usd}</div>
             
        </div>
        <div className='flex-3 w-full'>
            {id?
                <HistoricalData id={id}/>:<div>Coin Not selected</div>    
            }  
        </div>
   </div>
  )
}

export default CoinDetails