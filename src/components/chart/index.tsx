import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export const ApexChart = ({ values }) => {
  const [state, setstate] = useState({
    series: [
      {
        name: 'North star',
        data: values,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'North star',
        align: 'left',
      },
      xaxis: {
        categories: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
        ],
      },
    },
  })

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
  )
}
