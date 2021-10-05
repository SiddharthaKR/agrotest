import { Bar } from 'react-chartjs-2';
import React from "react";

function DashBar() {
  return (
    <div className="dashBarDiv">
     
      <Bar style={{width:16}}
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Test',
            data: [1, 2, 3, 10, 5, 6],
            backgroundColor: '#B3DDD4',
            barThickness: 12
          },
          {
            label: 'Reading',
            data: [3, 2, 3, 3, 2, 9],
            backgroundColor: '#1BBC9B',
            barThickness: 12
          }
          ]
        }}
        options={{
          
          scales: {
            xAxes: [
              {
                maxBarThickness: 40,
        barPercentage: 1,/* change this */
        categoryPercentage: 0.5,/* change this */


                gridLines: {
                  color: 'white'
                },

                ticks: {
                  fontColor: 'black'
                }
              }
            ],
            yAxes: [
              {

                gridLines: {
                  color: 'white'
                },

                ticks: {
                  beginAtZero: true,
                  fontColor: 'black',

                }
              }
            ]
          }
        }}
      >
      </Bar>
    </div>
  );
}

export default DashBar;
