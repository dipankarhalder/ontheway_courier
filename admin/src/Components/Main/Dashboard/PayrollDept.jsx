import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const PayrollDept = () => {
  const payrollData = [
    { department: "B.SC (IT)", cost: 3200 },
    { department: "M.Sc (IT)", cost: 5800 },
    { department: "BCA", cost: 4100 },
    { department: "MCA", cost: 5400 },
    { department: "Bioloy", cost: 4700 },
    { department: "Chemistry", cost: 3900 },
    { department: "Physics", cost: 3500 },
    { department: "Zoology", cost: 5600 },
    { department: "Botany", cost: 6000 },
    { department: "Maths", cost: 4400 },
    { department: "PCM", cost: 3700 },
    { department: "CBZ", cost: 4100 },
    { department: "ENVS", cost: 5900 },
    { department: "B.Com", cost: 4300 },
    { department: "M.Com", cost: 5900 },
    { department: "BBA", cost: 2700 },
    { department: "MBA", cost: 4900 },
    { department: "Econoimcs", cost: 5500 },
    { department: "English", cost: 4600 },
    { department: "Psychology", cost: 5300 },
    { department: "Sociology", cost: 5700 },
    { department: "Pol Science", cost: 6000 },
    { department: "History", cost: 4800 },
    { department: "MSW", cost: 5100 },
    { department: "B.Lib", cost: 4200 },
    { department: "M.Lib", cost: 5500 },
    { department: "Diploma Lib", cost: 3300 },
    { department: "LLB", cost: 5900 },
    { department: "LLM", cost: 5300 },
    { department: "PG", cost: 2600 },
    { department: "CC", cost: 3000 },
  ];

  const data = {
    labels: payrollData.map((item) => item.department),
    datasets: [
      {
        label: "Payroll Cost (₹)",
        data: payrollData.map((item) => item.cost),
        backgroundColor: "#0b57d0",
        borderRadius: 2,
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `₹${context.raw.toLocaleString()}`,
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
    <div className="app_dept_graph_full">
      <h3>Department Wise Payroll Cost</h3>
      <Bar data={data} options={options} height={60} />
    </div>
  );
};
