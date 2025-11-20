import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const StudentDpt = () => {
  const genderData = {
    labels: ["Male", "Female", "Non-binary", "Transgender"],
    datasets: [
      {
        label: "Students by Gender",
        data: [900, 950, 460, 502],
        backgroundColor: ["#36A2EB", "#FF6384", "#FF9F40", "#4BC0C0"],
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
    <div className="app_doug_graph_first">
      <h3>Students by Gender</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "300px",
        }}
      >
        <Doughnut data={genderData} options={options} />
      </div>
    </div>
  );
};
