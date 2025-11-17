import React from 'react'
import { useParams } from 'react-router'

type Props = {}

const CoinDetails = (props: Props) => {
    const {id} = useParams()
  return (
   <div className="container w-full bg-white rounded-2xl p-10">
        <div>

        </div>
        <div>
            <h1>{id}</h1>
        </div>
   </div>
  )
}

export default CoinDetails