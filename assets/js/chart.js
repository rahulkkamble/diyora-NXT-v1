
let salesData = [
  { time: "10am", sales: 45 },
  { time: "11am", sales: 24 },
  { time: "12pm", sales: 13 },
  { time: "1pm", sales: 25 },
  { time: "2pm", sales: 35 },
  { time: "3pm", sales: 21 },
  { time: "4pm", sales: 24 },
  { time: "5pm", sales: 27 },
  { time: "6pm", sales: 48 },
  { time: "7pm", sales: 56 },
  { time: "8pm", sales: 65 },
  { time: "9pm", sales: 45 },
  { time: "10pm", sales: 37 },
];

if (document.querySelector("#chart-line")) {
  var ctx2 = document.getElementById("chart-line").getContext("2d");
  var gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);
  gradientStroke1.addColorStop(1, "rgba(251,93,239,0.2)");
  gradientStroke1.addColorStop(0.5, "rgba(176,142,247,.1)");
  gradientStroke1.addColorStop(0, "rgba(94,94,255,.05)");
  var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 100);
  gradientStroke2.addColorStop(1, "rgba(251,93,239,1)");
  gradientStroke2.addColorStop(0.5, "rgba(176,142,247,1)");
  gradientStroke2.addColorStop(0, "rgba(94,94,255,1)");

  new Chart(ctx2, {
    type: "line",
    data: {
      labels: salesData.map((data) => data.time.split(" ")),  /* labels on x axis */
      datasets: [{
        label: " Interaction",
        tension: 0.5,
        borderWidth: 0,
        pointRadius: 3,
        borderColor: gradientStroke2,  /* edit this for line color */
        borderWidth: 4,
        // pointStyle: "circle",
        // pointRadius: 6,
        backgroundColor: gradientStroke1,   /* below line background color */
        fill: true,      /* fills the area between border line */
        data: salesData.map((data) => data.sales),  /* points with respect to y axis */
        maxBarThickness: 6
      },
        // {
        //   label: "Websites",
        //   tension: 0.4,
        //   borderWidth: 0,
        //   pointRadius: 0,
        //   borderColor: "#3A416F",
        //   borderWidth: 3,
        //   backgroundColor: gradientStroke2,
        //   fill: true,
        //   data: [30, 90, 40, 140, 290, 290, 340, 230, 400, 450],
        //   maxBarThickness: 6
        // },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        }
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: true,
            borderDash: [5, 5]
          },
          ticks: {
            display: true,
            padding: 10,
            color: '#b2b9bf',
            font: {
              size: 11,
              family: "Open Sans",
              style: 'normal',
              lineHeight: 2
            },
          }
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5]
          },
          ticks: {
            display: true,
            color: '#b2b9bf',
            padding: 20,
            font: {
              size: 11,
              family: "Open Sans",
              style: 'normal',
              lineHeight: 2
            },
          }
        },
      },
    },
  });
};

// doughnut chart
if (document.querySelector("#doughnut-chart")) {
  document.getElementById('doughnut-chart').style.maxHeight = "300px";
  var ctx3 = document.getElementById('doughnut-chart').getContext('2d');

  var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  new Chart(ctx3, {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018"
      }
    }
  });
}