import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const CostDept = () => {
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
        data: payrollData.map((item) => item.cost),
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
          gradient.addColorStop(0, "#7733ff6b");
          gradient.addColorStop(1, "rgba(153, 102, 255, 0)");
          return gradient;
        },
        borderColor: "#7733ffff",
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: "white",
        pointBorderColor: "#7733ffff",
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

  return (
    <div className="app_dept_graph_full">
      <h3>Department Wise Payroll Trend</h3>
      <Line data={data} options={options} height={80} />
    </div>
  );
};
