import { Chart, CategoryScale, LinearScale, BarElement, Title,Tooltip, Legend, PointElement,LineElement } from 'chart.js';
import React from 'react'
import { Bar, Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Title,Tooltip, Legend, PointElement,LineElement);

const UsingCharts = () => {

const data = {
    labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets:[{
        label: 'No. of Orders',
        data: [1000, 2000,3000,4000,5000,6000,6500,5500,4500,3500,2500,1500],
        backgroundColor: 'blue',
        borderColor:'blue'
    },
    {
        label: 'No. of Visits',
        data: [1500, 2500,3500,4500,5500,6500,6000,5000,4000,3000,2000,1000],
        backgroundColor: "purple",
        borderColor:'purple'
    }
]
}



  return (
    <div>
        <div className='container'>

        <h1 className='text-center'>Using Chart</h1>
        <hr />

        <h2>Bar Chart</h2>
        <Bar data={data} />

        <h2>Line Chart</h2>
        <hr />
        <Line data={data}/>

        <h2>cChart</h2>

        </div>
    </div>
  )
}

export default UsingCharts;