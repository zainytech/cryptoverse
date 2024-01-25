import React from 'react'
import { useGetCryptoExchangeQuery } from '../services/cryptoExchange';

const Exchanges = () => {
  const {data,isFetching} = useGetCryptoExchangeQuery();
  console.log(data);
  if(isFetching) return "loading..."
  
  return (
    <div>
      exchanges
    </div>
  )
}

export default Exchanges
