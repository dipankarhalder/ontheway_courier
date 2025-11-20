import { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const revenueData = {
  2021: [
    { month: "Jan", revenue: 9500 },
    { month: "Feb", revenue: 10200 },
    { month: "Mar", revenue: 11500 },
    { month: "Apr", revenue: 9800 },
    { month: "May", revenue: 12400 },
    { month: "Jun", revenue: 13800 },
    { month: "Jul", revenue: 14300 },
    { month: "Aug", revenue: 14900 },
    { month: "Sep", revenue: 15800 },
    { month: "Oct", revenue: 16000 },
    { month: "Nov", revenue: 17200 },
    { month: "Dec", revenue: 18000 },
  ],
  2022: [
    { month: "Jan", revenue: 11000 },
    { month: "Feb", revenue: 11500 },
    { month: "Mar", revenue: 13000 },
    { month: "Apr", revenue: 12200 },
    { month: "May", revenue: 14000 },
    { month: "Jun", revenue: 15500 },
    { month: "Jul", revenue: 16200 },
    { month: "Aug", revenue: 17000 },
    { month: "Sep", revenue: 18000 },
    { month: "Oct", revenue: 18500 },
    { month: "Nov", revenue: 19200 },
    { month: "Dec", revenue: 20500 },
  ],
  2023: [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 17000 },
    { month: "Apr", revenue: 14000 },
    { month: "May", revenue: 16000 },
    { month: "Jun", revenue: 16000 },
    { month: "Jul", revenue: 12800 },
    { month: "Aug", revenue: 15000 },
    { month: "Sep", revenue: 23000 },
    { month: "Oct", revenue: 20000 },
    { month: "Nov", revenue: 22000 },
    { month: "Dec", revenue: 25000 },
  ],
  2024: [
    { month: "Jan", revenue: 10000 },
    { month: "Feb", revenue: 8900 },
    { month: "Mar", revenue: 16000 },
    { month: "Apr", revenue: 11000 },
    { month: "May", revenue: 17000 },
    { month: "Jun", revenue: 20500 },
    { month: "Jul", revenue: 19500 },
    { month: "Aug", revenue: 22000 },
    { month: "Sep", revenue: 23000 },
    { month: "Oct", revenue: 21000 },
    { month: "Nov", revenue: 24400 },
    { month: "Dec", revenue: 26000 },
  ],
  2025: [
    { month: "Jan", revenue: 13500 },
    { month: "Feb", revenue: 14800 },
    { month: "Mar", revenue: 16500 },
    { month: "Apr", revenue: 15500 },
    { month: "May", revenue: 17200 },
    { month: "Jun", revenue: 21500 },
    { month: "Jul", revenue: 22500 },
    { month: "Aug", revenue: 24000 },
    { month: "Sep", revenue: 25000 },
    { month: "Oct", revenue: 24500 },
    { month: "Nov", revenue: 26000 },
    { month: "Dec", revenue: 27500 },
  ],
};

export const Revenue = () => {
  const chartRef = useRef();
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const data = {
    labels: revenueData[selectedYear].map((item) => item.month),
    datasets: [
      {
        data: revenueData[selectedYear].map((item) => item.revenue),
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(116, 247, 144, 0.4)");
          gradient.addColorStop(1, "rgba(75,192,192,0.05)");
          return gradient;
        },
        borderColor: "rgba(21, 135, 36, 1)",
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(21, 135, 36, 1)",
        pointRadius: 4,
        pointBorderWidth: 2,
        pointHoverRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
          },
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            if (value >= 1000) {
              return value / 1000 + "k";
            }
            return value;
          },
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
          },
        },
      },
    },
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className="app_revenue_overview">
      <div className="app_rev_heading">
        <h3>Revenue Overview</h3>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {Object.keys(revenueData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};
