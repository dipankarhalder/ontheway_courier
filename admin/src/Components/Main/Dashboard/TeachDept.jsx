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

export const TeachDept = () => {
  const payrollData = [
    { department: "B.SC (IT)", cost: 3200, teachers: 4 },
    { department: "M.Sc (IT)", cost: 5800, teachers: 6 },
    { department: "BCA", cost: 4100, teachers: 5 },
    { department: "MCA", cost: 5400, teachers: 6 },
    { department: "Bioloy", cost: 4700, teachers: 5 },
    { department: "Chemistry", cost: 3900, teachers: 4 },
    { department: "Physics", cost: 3500, teachers: 4 },
    { department: "Zoology", cost: 5600, teachers: 6 },
    { department: "Botany", cost: 6000, teachers: 7 },
    { department: "Maths", cost: 4400, teachers: 5 },
    { department: "PCM", cost: 3700, teachers: 4 },
    { department: "CBZ", cost: 4100, teachers: 5 },
    { department: "ENVS", cost: 5900, teachers: 6 },
    { department: "B.Com", cost: 4300, teachers: 5 },
    { department: "M.Com", cost: 5900, teachers: 6 },
    { department: "BBA", cost: 2700, teachers: 3 },
    { department: "MBA", cost: 4900, teachers: 6 },
    { department: "Econoimcs", cost: 5500, teachers: 5 },
    { department: "English", cost: 4600, teachers: 5 },
    { department: "Psychology", cost: 5300, teachers: 5 },
    { department: "Sociology", cost: 5700, teachers: 5 },
    { department: "Pol Science", cost: 6000, teachers: 6 },
    { department: "History", cost: 4800, teachers: 5 },
    { department: "MSW", cost: 5100, teachers: 5 },
    { department: "B.Lib", cost: 4200, teachers: 3 },
    { department: "M.Lib", cost: 5500, teachers: 4 },
    { department: "Diploma Lib", cost: 3300, teachers: 2 },
    { department: "LLB", cost: 5900, teachers: 6 },
    { department: "LLM", cost: 5300, teachers: 5 },
    { department: "PG", cost: 2600, teachers: 2 },
    { department: "CC", cost: 3000, teachers: 2 },
  ];

  const data = {
    labels: payrollData.map((item) => item.department),
    datasets: [
      {
        label: "Number of Teachers",
        data: payrollData.map((item) => item.teachers),
        backgroundColor: "#FF9F40",
        borderRadius: 3,
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
          label: (context) => `Teachers: ${context.raw}`,
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
        beginAtZero: true,
        ticks: {
          stepSize: 1,
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
      <h3>Department Wise Teacher Count</h3>
      <Bar data={data} options={options} height={60} />
    </div>
  );
};
