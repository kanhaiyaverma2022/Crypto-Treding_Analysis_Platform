import React from "react";
import {Line} from "react-chartjs-2";
import {Col, Row, Typography} from "antd";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const {Title : AntdTitle} = Typography;
const LineChart = ({coinHistory, currentPrice, coinName})=>{

    const coinPrice = [];
    const coinTimestamp = [];

    if (coinHistory?.data?.history) {
      for (let i = 0; i < coinHistory.data.history.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price);
        const timestamp = new Date(coinHistory.data.history[i].timestamp * 1000);
        coinTimestamp.push(timestamp.toLocaleDateString());
      }
    }
    console.log(coinTimestamp)

    const data = {

      labels: coinTimestamp,
      datasets: [
                {
                  label:'Price in USD',
                  data: coinPrice,
                  fill:false,
                  backgroundColor:'#0071bd',
                  borderColor: '#0071bd'
                }
      ]
    }

    const options = {

      scales:{
        y:
         { 
          beginAtZero:true,
          ticks:{
           

          }
        }
        
      }
    }



    return (
        <>
        <Row className="chart-header">
            <AntdTitle level={2} className="chart-title">
              {coinName} Price Chart
            </AntdTitle>
            <Col className="price-container">
              <AntdTitle level={5} className="price-change">
               {coinHistory?.data?.change}%
              </AntdTitle>
              <AntdTitle level={5} className="current-price">
                Current {coinName} Price: $ {currentPrice} 
              </AntdTitle>
            </Col>
            <Line data={data} options={options} />

        </Row>
        </>
    )
}

export default LineChart;