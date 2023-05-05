import React from 'react';
import ReactEcharts from "echarts-for-react"; 

export default function pieChart() {
    
    const Temp = 50;
    const Empty = 200;

    const colorPalette = ['#FF4500', '#00ff15'];

    const option = {
        series: [
          {
            
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: true,
            itemStyle: {
              borderRadius: 5
            },
             
          labelLine: {show : false},
            
            data: [
              { value: Temp, name: 'Temp', label: { formatter: ['{c}°C'].join('\n'),position:'center', fontWeight: 'bold',fontSize: 20,}},
              { value: Empty, name: ''}
            ],color: colorPalette,
          }
        ]
      };

      return <ReactEcharts option={option} style={{height: '100%', width: '100%' }}></ReactEcharts>;

}