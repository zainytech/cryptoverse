import React from 'react'
import { useGetCryptoExchangeQuery } from '../services/cryptoExchange';
import {Row,Col,Typography,Avatar,Collapse} from 'antd';
import millify from 'millify';
import Loader from './Loader'

const {Title,Text} = Typography
const {Panel} = Collapse;
const Exchanges = () => {
  const apiKey = process.env.REACT_APP_API_KEY_EXCHANGE ;
  const {data,isFetching} = useGetCryptoExchangeQuery({key: apiKey});
  // console.log("data:",data);
  if(isFetching) return <Loader/>
  
  return (
  <>
  <Row>
    <Col span={6}><strong>Exchanges</strong></Col>
    <Col span={6}><strong>24h Trading Volume</strong></Col>
    <Col span={6}><strong>Trust Score</strong></Col>
    <Col span={6}><strong>Link</strong></Col>
  </Row>
  
    {data.map((exchange)=>(
      <Collapse>
      <Panel showArrow={false} header={(
       <Row key={exchange.id}>
         <Col span={6}><Avatar className="exchange-image" src={exchange.image}></Avatar><Text>{exchange.name}</Text></Col>
         <Col span={6}>{millify(exchange.trade_volume_24h_btc_normalized)}</Col>
         <Col span={6}>{exchange.trust_score}</Col>
         <Col span={6}><a href={exchange.url} target="_blank">{exchange.name}'s Offical Website</a></Col>
       </Row>)}>
           {exchange.description? <p>{exchange.description}</p>:`Sorry no discription found but you can checkout ${exchange.name}'s official website for more info the link is already given. Thanks!`}
           </Panel>
           </Collapse>
    ))}
  </>      
  )
}

export default Exchanges
