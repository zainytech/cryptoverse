import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined,ExclamationCircleOutlined} from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const {Title, Text } = Typography;
const {option} = Select;
const Cryptodetails = () => {

  const {coinId} = useParams();
  const { timePeriod, setTimePeriod } =useState('7d');
  const { data,isFetching } = useGetCryptoDetailsQuery(coinId);
  console.log(data);
  if(isFetching) return "...Loading"
  return (
    <div>
      cryptodetails {coinId}
    </div>
  )
}

export default Cryptodetails
