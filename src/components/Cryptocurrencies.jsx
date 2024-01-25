import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card,Row, Col, Input} from "antd"

import { useGetCryptosQuery } from '../services/cryptoApi.js';
import Loader from './Loader.jsx';


const Cryptocurrencies = ({simplified}) => {
  // console.log("ac:",simplified)
  const count = simplified ? 10 : 100;
  // console.log("count:",count)
  const {data:cryptoList,isFetching} = useGetCryptosQuery(count);
  // console.log(cryptoList)
  const [cryptos, setCryptos] = useState();
  // console.log(cryptos);
  const [searchterm, setSearchTerm] = useState("");
  useEffect(()=>{
    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchterm.toLowerCase()));
    setCryptos(filteredData);
  },[cryptoList,searchterm])

  if (isFetching) return <Loader/>;
  return (
    <>
    {!simplified &&(
    <div className='search-crypto'>
      <Input placeholder="Search Cryptocurency" onChange={(e)=>setSearchTerm(e.target.value)}/>
    </div>
    )}
    <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
          <Link to={`/crypto/${currency.uuid}`}>
            <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className='crypto-image' src={currency.iconUrl}></img>}
              hoverable
            >
              <p>Price: {millify(currency.price)}</p>
              <p>Market Cap: {millify(currency.marketCap)}</p>
              <p>Daily Change: {millify(currency.change)}</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies
