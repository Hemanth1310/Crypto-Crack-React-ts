import React from 'react'
import type { CryptoData } from '../Types'
import { useNavigate } from 'react-router'

type Props = {
    cryptoData:CryptoData[]
}

const CoinsList = (props: Props) => {
    const navigate=useNavigate()
  return (
        <table className='table-fixed w-full transition-all duration-300 ease-in-out'>
            <thead >
                <tr className='flex justify-between items-center p-4 bg-amber-200 rounded-tr-2xl rounded-tl-2xl text-xl font-bold'>
                    <td className='flex-1' >Id</td>
                    <td className='flex-1'>Name</td>
                    <td className='hidden md:flex md:flex-1'>Prics Change 24h</td>
                    <td className='hidden md:flex md:flex-1'>Total Supply</td>
                    <td className='flex-1'>Market Cap.</td>
                </tr>
            </thead>
            <tbody>
                
                {props.cryptoData.map((coin,index)=>
                <tr key={coin.id} onClick={()=>navigate(`/coin/${coin.id}`)} className={`flex justify-between items-center p-4 bg-white border border-gray-300 rounded- hover:bg-cyan-50 ${props.cryptoData.length=== index+1 && 'rounded-br-2xl rounded-bl-2xl'}`}>
                    <td className='flex-1'>
                        <img className='h-14' src={coin.image}></img>
                    </td>
                    <td className='flex-1 '>{coin.name}</td>
                    <td className='hidden md:flex md:flex-1'>{Math.floor(coin.price_change_24h)}</td>
                    <td className='hidden md:flex md:flex-1'>{Math.floor(coin.total_supply)}</td>
                    <td className='flex-1'>{coin.market_cap}</td>
                    
                </tr>)}
                
            </tbody>
        </table>
  )
}

export default CoinsList