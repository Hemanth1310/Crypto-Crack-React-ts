import React, { useEffect, useState } from 'react'
import type { MarketChartData } from '../Types'
import { Line } from 'react-chartjs-2'

type Props = {
    id:string
}

type days = 1|7|30|365

const API_KEY = import.meta.env.VITE_API_ENDPOINT
const BASE_URL = import.meta.env.VITE_API_URL_History
const HistoricalData = (props: Props) => {
    const [historicalData,setHitoricalData] = useState<MarketChartData[]>()
    const [days,setDays] = useState<days>(1)
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const fetchData = async()=>{
        try{
            const response =await fetch(`${BASE_URL}?vs_currency=usd&days=${days}&x_cg_demo_api_key=${API_KEY}`)
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }else{
                const resp = (await response.json()) as MarketChartData[]
                console.log(resp)
                setHitoricalData(resp)
                setIsLoading(false)
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[props.id])
  return (
    <div className='w-full h-full flex items-center justify-center'>
        {isLoading?<div>Loading please Wait...</div>:
            <div>
            {/* `    <Line
                    data = {{
                        labels:historicalData?.map(coin=>{
                            let date = new Date(coin[])
                        }),
                        datasets:[]
                    }}
                />` */}
            </div>
        }</div>
  )
}

export default HistoricalData