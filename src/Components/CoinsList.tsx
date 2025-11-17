import React from 'react'
import type { CryptoData } from '../Types'
import { useNavigate } from 'react-router'

type Props = {
    cryptoData:CryptoData[]
}

const CoinsList = (props: Props) => {
    const navigate=useNavigate()
  return (
        <table className='table-auto w-full'>
            <thead>
                <tr className='flex justify-between p-4 bg-amber-50 rounded-tr-2xl rounded-tl-2xl px-10'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Market Cap.</th>
                </tr>
            </thead>
            <tbody>
                {props.cryptoData.map(coin=>
                <tr key={coin.id} onClick={()=>navigate(`/coin/${coin.id}`)} className='flex justify-between items-center p-4 bg-white border border-gray-300 px-10 hover:bg-cyan-50'>
                    <td className='flex'>
                        <img className='h-14' src={coin.image}></img>
                    </td>
                    <td className='flex text-start'>{coin.name}</td>
                    <td>{coin.market_cap}</td>
                </tr>)}
                
            </tbody>
        </table>
  )
}

export default CoinsList