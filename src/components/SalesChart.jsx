import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const SalesChart = () => {
  const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2021 Sales',
        data: [100, 200, 150, 300, 400, 350, 450, 300, 500],
        borderColor: '#FF00FF',
        backgroundColor: 'rgba(255, 0, 255, 0.2)',
        tension: 0.4, // Smooth curves
      },
      {
        label: '2020 Sales',
        data: [50, 250, 100, 250, 300, 200, 500, 250, 450],
        borderColor: '#0000FF',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // No legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#EDEDED',
        },
      },
    },
  }

  return (
    <div className="w-full h-full bg-white p-8 rounded-xl shadow">
      <h3 className="text-lg font-semibold my-1">Sales Overview</h3>
      <p className="text-sm text-gray-500 my-2 font-medium"><b>4% more</b> in 2021</p>
      <br />
      <Line data={data} options={options} />
    </div>
  )
}

export default SalesChart
