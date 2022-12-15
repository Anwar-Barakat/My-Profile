const frontend = document.getElementById("frontend").getContext("2d");
const myFrontend = new Chart(frontend, {
  type: "bar",
  data: {
    labels: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind"],
    datasets: [
      {
        label: "Frontend",
        data: [60, 75, 70, 90, 80],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const backend = document.getElementById("backend").getContext("2d");
const myBackend = new Chart(backend, {
  type: "polarArea",
  data: {
    labels: ["PHP", "MySQL", "Laravel", "Livewire", "AlpineJS"],
    datasets: [
      {
        label: "backend",
        data: [60, 80, 70, 90, 80],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
      },
    ],
  },
});
