import React, { useEffect, useState } from 'react'
import type { MarketChartData } from '../Types'
import { Line } from 'react-chartjs-2'
import { handleCurrency } from '../Context/SelectedCurrencyContext'
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend 
} from 'chart.js';

// Register the components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
type Props = {
    id:string
}

type days = 1|7|30|365



const API_KEY = import.meta.env.VITE_API_ENDPOINT
const BASE_URL = import.meta.env.VITE_API_URL_History
const HistoricalData = (props: Props) => {
    const [historicalData,setHitoricalData] = useState<MarketChartData[]>([])
    const [days,setDays] = useState<days>(1)
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const dayAvailable:days[] = [1,7,30,365] 
     const {selectedCurrency,handleCurrencyChange} = handleCurrency()
    const fetchData = async()=>{
        try{
            const response =await fetch(`${BASE_URL}?vs_currency=usd&days=${days}&x_cg_demo_api_key=${API_KEY}`)
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }else{
                const resp = (await response.json()) 
                console.log(resp)
                setHitoricalData(resp.prices)
                setIsLoading(false)
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[props.id,days])
  return (
    <div className='flex items-center justify-center'>
        {isLoading?<div>Loading please Wait...</div>:
            <div className=' p-4 md:p-8  bg-white h-full w-full'>
               <Line
                    data = {{
                        labels:historicalData.map(coin=>{
                            let date = new Date(coin[0])
                            let time = date.getHours()>12
                              ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                            : `${date.getHours()}:${date.getMinutes()} AM`;
                            return days === 1 ? time : date.toLocaleDateString();
                        }),
                        datasets:[
                             {
                                data: historicalData.map((coin) => coin[1]),
                                label: `Price ( Past ${days} Days ) in ${selectedCurrency}`,
                                borderColor: "#EEBC1D",
                            },
                        ]
                    }}
                    options={{
                            elements: {
                            point: {
                                radius: 1,
                            },
                            },
                        }}
                />
                <div className='w-full flex justify-between mt-4'>
                    {dayAvailable.map((day)=>(<button onClick={()=>setDays(day)} className={` w-20 md:w-24 lg:w-42  p-4 rounded-2xl text-xl ${day===days? 'bg-amber-200':'bg-gray-200'}`}>{day===1?'Today':`${day}'s Period`}</button>)
                        
                    )}
                </div>
            </div>
        }</div>
  )
}

export default HistoricalData