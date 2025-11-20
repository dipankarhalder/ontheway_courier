import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const StudentGp = () => {
  const departmentData = {
    labels: ["Science", "Engineering", "Arts", "Legal Studies"],
    datasets: [
      {
        label: "Students by Department",
        data: [320, 280, 300, 110],
        backgroundColor: ["#9966FF", "#FFCE56", "#4BC0C0", "#FF6384"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
            size: 12,
          },
        },
      },
      tooltip: {
        bodyFont: {
          family: "'AvenirNext', sans-serif",
          weight: 500,
        },
        titleFont: {
          family: "'AvenirNext', sans-serif",
          weight: 500,
        },
      },
    },
    layout: {
      padding: 10,
    },
    responsive: true,
  };

  return (
    <div className="app_doug_graph">
      <h3>Students by Department (Science)</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "300px",
        }}
      >
        <Doughnut data={departmentData} options={options} />
      </div>
    </div>
  );
};
