import React from 'react'
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import {Link} from "react-router-dom";
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies, News } from '../components'

const { Title } = Typography;

const Homepage = () => {
  const {data,isFetching} = useGetCryptosQuery(10);
  // console.log(data);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
        {/* {!data && ( */}
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value= {data ? globalStats.total: null}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={data ? millify(globalStats.totalExchanges) : null}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={data ? millify(globalStats.totalMarketCap) : null}/></Col>
        <Col span={12}><Statistic title="Total 24h volume" value={data ? millify(globalStats.total24hVolume) : null}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={data ? millify(globalStats.totalMarkets) : null}/></Col>
      </Row>
        {/* )} */}
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Latest Crpto News</Title>
        <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage
