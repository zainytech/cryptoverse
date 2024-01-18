import React from 'react'
import { useState } from 'react';
import { Select,Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi.js';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
  const [newsToken, setNewsToken] = useState('BTC');
  const {data:cryptoNews , isFetching} = useGetCryptoNewsQuery(newsToken);
  let tokenArray = ["ADA","BCH","BNB","BTC","DOGE","DOT","EOS","ETC","ETH","FIL","ICP","LTC","MATIC","SOL","THETA","TRX","VET","XLM","XMR","XRP","USDT"]
  // console.log(cryptoNews);

  if (!cryptoNews?.news) return "Loading...";
  // if(isFetching) return "Loading...";
  let count=0;
  if(!simplified) {count=10;} else {count=12;}
  const demoImage = '';
  return (
    <> 
      <Row gutter={[24, 24]}>
      {simplified && (
        cryptoNews.news.map((news,i) => (
          i<6 ? (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={news.Url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>{news.Title}</Title>
                    <img className='news-image' src={news.Image} alt="/news"/>
                  </div>
                    <p>
                      {news.Description?.length >100 ? `${news.Description.substring(1,100)}...` : news.Description}
                    </p>
                    
                    <div className='provider-container'>
                      <Text className="provider-name">{news.Source}</Text>
                      <Text>{moment(news.PublishedOn).startOf('ss').fromNow()}</Text>
                    </div>
                </a>
              </Card>
            </Col>
          ) : null          
        ))
      )}
        {!simplified && (
          <>
          <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsToken(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {tokenArray.map((currency) => <Option value={currency}>{currency}</Option>)}
          </Select>
          </Col>

        {cryptoNews.news.map((news,i) => (
          i<60 ? (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={news.Url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>{news.Title}</Title>
                    <img className='news-image' src={news.Image} alt="/news"/>
                  </div>
                    <p>
                      {news.Description?.length >100 ? `${news.Description.substring(1,100)}...` : news.Description}
                    </p>
                    <div className='provider-container'>
                    <Text className="provider-name">{news.Source}</Text>
                      <Text>{moment(news.PublishedOn).startOf('ss').fromNow()}</Text>
                    
                    </div>
                </a>
              </Card>
            </Col>
          ) : null      
            
        ))
        }
        </>
      )}
      </Row>
    </>
  )
}

export default News
