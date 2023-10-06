import { Chart, CategoryScale, LinearScale,BarElement, Title,Tooltip, Legend, PointElement,LineElement,ArcElement, } from 'chart.js';
import React, { useRef } from 'react'
import { Bar, Doughnut, Line,Chart as MyChart, PolarArea } from 'react-chartjs-2';

Chart.register(CategoryScale,  LinearScale, BarElement, Title,Tooltip, Legend, PointElement,LineElement,ArcElement);

const UsingCharts = () => {

const data = {
    labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets:[{
        label: 'No. of Orders',
        data: [10, 20,30,40,50,60,65,55,45,38,28,15],
        backgroundColor: ['blue',],
        borderColor:'blue'
    },
    {
        label: 'No. of Visits',
        data: [15, 25,35,45,55,65,60,50,40,30,20,10],
        backgroundColor: "purple",
        borderColor:'purple'
    }
]
}
const data2={
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets:[{
    label: 'No. of Orders',
    data: [10, 20,30,40,50,60,65,55,45,38,28,15],
    backgroundColor: ['blue','green','orange','pink','red','purple'],
    borderColor:['blue','green','orange','pink','red','purple' ]
  }]
}
//  const chartRef= useRef(null);
// const createGradient=(ctx,chartArea)=>{
//   const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
//   gradient.addColorStop(0,'yellow');
//   gradient.addColorStop(0.5,'orange' );
//   gradient.addColorStop(1,'pink' );
//   return gradient
// }


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
         
        <div style={{height:'300px'}}>

        <h2>Doughnut Chart</h2>
        <hr />
        <Doughnut width={'100%'} data={data2} options={{ maintainAspectRatio:false}}/>
        </div>
           {/* <MyChart data={data} type='line' ref={chartRef}/> */}
              
        </div>
       
    </div>
  )
}

export default UsingCharts;