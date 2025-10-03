import { Typography, Row, Col, Statistic } from 'antd'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useGetCryptoQuery } from './services/cryptoApi'
import millify from 'millify';
import {Cryptocurrencies, News} from './index'
import SmoothLoader from './Loader';

const {Title} = Typography


const Homepage = () => {

    const [simplified,setSimplified] = useState(false);
    const {data, isFetching} = useGetCryptoQuery(10);
    const stats = data?.data?.stats ?? {}

    if (isFetching) return (<SmoothLoader />)
   
    // console.log(data)
  return (
    <>
    
    <Title level={2} className='headings'>
        Global Crypto States
    </Title>
    <Row>
        <Col span={12}>
        <Statistic title="Total Cryptocurrencies" value={millify(stats?.totalCoins)}/>
        </Col>
        <Col span={12}>
        <Statistic title="Total Exchanges" value={millify(stats?.totalExchanges)}/>
        </Col>
        <Col span={12}>
        <Statistic title="Total Market Cap" value={millify(stats?.totalMarketCap)}/>
        </Col>
        <Col span={12}>
        <Statistic title="Total 24h Volume" value={millify(stats?.total24hVolume)}/>
        </Col>
        <Col span={12}>
        <Statistic title="Total Markets" value={millify(stats?.totalMarkets)}/>
        </Col>
        
        
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className='show-more' ><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified/>
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Latest Crypto News</Title>
      <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
    </div>
    <News />

    </>
  )
}

export default Homepage
