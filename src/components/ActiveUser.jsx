import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const ActiveUser = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Users',
        data: [120, 200, 150, 300, 400, 350, 500],
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // No legend for simplicity
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          color: '#FFF', // White ticks
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#FFF', // White ticks
        },
      },
    },
  }

  return (
    <div className="px-4 py-8 rounded-xl bg-white w-full">
      <div>
        <Bar data={data} options={options} className='w-full bg-zinc-800 p-4 rounded-lg'/>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold opacity-90">Active Users</h3>
        <p className="text-sm text-gray-600">( <b className='text-md'>+23%</b> ) than last week</p>
        <div className="flex justify-between mt-6 text-sm">
          <div>
            <span className="block text-gray-500">Users</span>
            <span className="block text-xl font-bold">36K</span>
          </div>
          <div>
            <span className="block text-gray-500">Clicks</span>
            <span className="block text-xl font-bold">2M</span>
          </div>
          <div>
            <span className="block text-gray-500">Sales</span>
            <span className="block text-xl font-bold">435$</span>
          </div>
          <div>
            <span className="block text-gray-500">Items</span>
            <span className="block text-lg font-bold">43</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveUser
