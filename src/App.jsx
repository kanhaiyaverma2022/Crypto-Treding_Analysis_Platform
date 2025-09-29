import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar,Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components/index';
import './App.css';


function App() {

  return (
    <>
      <div className='app'>
        <div className='navbar'> 
         
      <Navbar /> 
        </div>
        <div className='main'>
          <Layout style={{padding:'16px'}}>
            <Routes>
              <Route exact path='/' element={<Homepage/>}/>
              <Route exact path='/exchanges' element={<Exchanges/>}/>
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
              <Route exact path='/crypto/:coinId' element={<CryptoDetails/>}/>
              <Route exact path='/news' element={<News/>}/>
            </Routes>
          </Layout>
          <div className='footer'>
          <Typography.Title level={5} style={{color:"white", textAlign:"center" }}> 
            Cryptoverse <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/homepage">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/Cryptocurrencies">Crypto Currencies</Link>
            <Link to="/News">News</Link>
          </Space>

        </div>
        </div>

       

      </div>
    </>
  )
}

export default App
