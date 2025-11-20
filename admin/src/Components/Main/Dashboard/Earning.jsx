import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const financeData = {
  2021: [
    { month: "Jan", earning: 9500, expense: 6000 },
    { month: "Feb", earning: 10200, expense: 6800 },
    { month: "Mar", earning: 11500, expense: 7200 },
    { month: "Apr", earning: 9800, expense: 6900 },
    { month: "May", earning: 12400, expense: 7400 },
    { month: "Jun", earning: 13800, expense: 8000 },
    { month: "Jul", earning: 14300, expense: 8200 },
    { month: "Aug", earning: 14900, expense: 8500 },
    { month: "Sep", earning: 15800, expense: 8700 },
    { month: "Oct", earning: 16000, expense: 9000 },
    { month: "Nov", earning: 17200, expense: 9200 },
    { month: "Dec", earning: 18000, expense: 9400 },
  ],
  2022: [
    { month: "Jan", earning: 11000, expense: 7500 },
    { month: "Feb", earning: 11500, expense: 7700 },
    { month: "Mar", earning: 13000, expense: 8000 },
    { month: "Apr", earning: 12200, expense: 7900 },
    { month: "May", earning: 14000, expense: 8600 },
    { month: "Jun", earning: 15500, expense: 8800 },
    { month: "Jul", earning: 16200, expense: 9200 },
    { month: "Aug", earning: 17000, expense: 9400 },
    { month: "Sep", earning: 18000, expense: 9600 },
    { month: "Oct", earning: 18500, expense: 9900 },
    { month: "Nov", earning: 19200, expense: 10300 },
    { month: "Dec", earning: 20500, expense: 11000 },
  ],
  2023: [
    { month: "Jan", earning: 12000, expense: 8000 },
    { month: "Feb", earning: 15000, expense: 9500 },
    { month: "Mar", earning: 17000, expense: 9800 },
    { month: "Apr", earning: 14000, expense: 8800 },
    { month: "May", earning: 16000, expense: 10000 },
    { month: "Jun", earning: 16000, expense: 10200 },
    { month: "Jul", earning: 12800, expense: 9600 },
    { month: "Aug", earning: 15000, expense: 10500 },
    { month: "Sep", earning: 23000, expense: 11800 },
    { month: "Oct", earning: 20000, expense: 11000 },
    { month: "Nov", earning: 22000, expense: 11500 },
    { month: "Dec", earning: 25000, expense: 12000 },
  ],
  2024: [
    { month: "Jan", earning: 10000, expense: 7200 },
    { month: "Feb", earning: 8900, expense: 6800 },
    { month: "Mar", earning: 16000, expense: 9400 },
    { month: "Apr", earning: 11000, expense: 7500 },
    { month: "May", earning: 17000, expense: 9600 },
    { month: "Jun", earning: 20500, expense: 10400 },
    { month: "Jul", earning: 19500, expense: 9900 },
    { month: "Aug", earning: 22000, expense: 11200 },
    { month: "Sep", earning: 23000, expense: 11500 },
    { month: "Oct", earning: 21000, expense: 11000 },
    { month: "Nov", earning: 24400, expense: 12200 },
    { month: "Dec", earning: 26000, expense: 13000 },
  ],
  2025: [
    { month: "Jan", earning: 11000, expense: 7500 },
    { month: "Feb", earning: 11500, expense: 7700 },
    { month: "Mar", earning: 13000, expense: 8000 },
    { month: "Apr", earning: 12200, expense: 7900 },
    { month: "May", earning: 14000, expense: 8600 },
    { month: "Jun", earning: 15500, expense: 8800 },
    { month: "Jul", earning: 16200, expense: 9200 },
    { month: "Aug", earning: 17000, expense: 9400 },
    { month: "Sep", earning: 18000, expense: 9600 },
    { month: "Oct", earning: 18500, expense: 9900 },
    { month: "Nov", earning: 19200, expense: 10300 },
    { month: "Dec", earning: 20500, expense: 11000 },
  ],
};

export const Earning = () => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const data = {
    labels: financeData[selectedYear].map((item) => item.month),
    datasets: [
      {
        label: "Earning",
        data: financeData[selectedYear].map((item) => item.earning),
        backgroundColor: "rgba(16, 156, 35, 1)",
        borderRadius: 2,
        barThickness: 10,
        categoryPercentage: 0.6,
        barPercentage: 0.8,
      },
      {
        label: "Expense",
        data: financeData[selectedYear].map((item) => item.expense),
        backgroundColor: "#FF9F40",
        borderRadius: 2,
        barThickness: 10,
        categoryPercentage: 0.6,
        barPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        width: 20,
        labels: {
          font: {
            family: "'AvenirNext', sans-serif",
            size: 13,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: $${Number(
              context.raw
            ).toLocaleString()}`,
        },
      },
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

  return (
    <div className="app_revenue_overview">
      <div className="app_rev_heading">
        <h3>Earnings vs Expenses</h3>
        <select value={selectedYear} onChange={handleYearChange}>
          {Object.keys(financeData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};
