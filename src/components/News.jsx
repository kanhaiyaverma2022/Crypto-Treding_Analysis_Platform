import React, {useState} from 'react'
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from './services/cryptoNewsApi';

const {Text, Title} = Typography;
const {Option} = Select;


const News = () => {
  const {data,isFetching} = useGetCryptoNewsQuery({newsCategory:'cryptocurrency', count:10});
  
  if (isFetching) return 'Loading...';
  console.log('news data',data);
  
  return (
    <>
    {/* <Col span={24}>
        <Select 
        showSearch
        className='select-news'
        optionFilterProp='children'
        onChange={value => console.log(value)}
        filterOption={({input,option})=>option?.children.toLowerCase().indexOf(input.toLowerCase())}>
    
        </Select>
        </Col> */}
    <Row gutter={[24,24]}>
      {data?.map((news, i)=>
        ((
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' rel={`noReferrence`}>
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>
                    {news?.title}
                  </Title>
                  <img style={{width:'100px', height:'100px'}} src={news.thumbnail} alt={news.title}/>
                </div>
                <p>
                  {news?.description > 100 ? `${news?.description?.subString(0,100)}...` : news?.description}
                </p>
                <div className='provider-container'>
                 
                    <Avatar src={news.thumbnail} alt={news.title} />
                    <Text>{moment(news?.date).startOf('ss').fromNow()}</Text>
                  
                   
                </div>


              </a>


            </Card>
          </Col>
        )))
      }

    </Row>
    
    
    </>
  )
}

export default News
