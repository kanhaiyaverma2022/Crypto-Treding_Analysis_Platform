import React, { useState,useEffect } from 'react'
import millify from 'millify'
import {Card, Row, Col, Input} from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptoQuery } from './services/cryptoApi'
import SmoothLoader from './Loader'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data, isFetching} = useGetCryptoQuery(count);
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, setCrypto] = useState ([]);

  useEffect(()=>
  {
   const filteredData = data?.data?.coins?.filter( crypto => crypto.name.toLowerCase().includes(searchTerm.toLowerCase()));
   setCrypto(filteredData);
  },[data,searchTerm])


  if (isFetching) return (<SmoothLoader/>)

  return (
    <>
    {!simplified &&
    <div className='search-crypto'>
    <Input placeholder='search cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)} /> 
  </div>}
    
    <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((crypto, index) => (
        (<Col xs={24} sm={12} lg={6} key={index} className='crypto-card'>
          <Link to={`/crypto/${crypto.uuid}`}>
          <Card 
            title={`${crypto?.rank}. ${crypto.name}`}
            extra={<img src={crypto?.iconUrl} className='crypto-image'/>}
            hoverable>
              <p>Price : {millify(crypto?.price)}</p>
              <p>Market Cap : {millify(crypto?.marketCap)}</p> 
              <p>Daily Change : {millify(crypto?.change)}</p>
          </Card>
          </Link>
      </Col>)
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies
