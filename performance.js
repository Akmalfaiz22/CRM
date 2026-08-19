const projectCard = document.getElementById('projectCard').getContext("2d");
const taskCard = document.getElementById('taskCard').getContext("2d");
const deliveryCard = document.getElementById('deliveryCard').getContext("2d");
const productivityCard = document.getElementById('productivityCard').getContext("2d");
const clientCard = document.getElementById('clientCard').getContext("2d");
const billableCard = document.getElementById('billableCard').getContext("2d");
const TrendChart = document.getElementById('TrendChart').getContext('2d');
const categoryChart = document.getElementById('categoryChart');
const onTimeGauge = document.getElementById('onTimeGauge').getContext('2d');;
const ctx = document.getElementById('weeklyChart').getContext('2d');


const purpleGradient = projectCard.createLinearGradient(0, 0, 0, 100);
purpleGradient.addColorStop(0, "rgba(168, 85, 247, 0.25)");
purpleGradient.addColorStop(1, "rgba(168, 85, 247, 0)");

const greenGradient = taskCard.createLinearGradient(0, 0, 0, 100);
greenGradient.addColorStop(0, "rgba(34, 197, 94, 0.25)");
greenGradient.addColorStop(1, "rgba(34, 197, 94, 0)");

const blueGradient = deliveryCard.createLinearGradient(0, 0, 0, 100);
blueGradient.addColorStop(0, "rgba(59, 130, 246, 0.25)");
blueGradient.addColorStop(1, "rgba(59, 130, 246, 0)");

const orangeGradient = productivityCard.createLinearGradient(0, 0, 0, 100);
orangeGradient.addColorStop(0, "rgba(245, 158, 11, 0.25)");
orangeGradient.addColorStop(1, "rgba(245, 158, 11, 0)");

const yellowGradient = clientCard.createLinearGradient(0, 0, 0, 100);
yellowGradient.addColorStop(0, "rgba(250, 204, 21, 0.25)");
yellowGradient.addColorStop(1, "rgba(250, 204, 21, 0)");

const cyanGradient = billableCard.createLinearGradient(0, 0, 0, 100);
cyanGradient.addColorStop(0, "rgba(34, 211, 238, 0.25)");
cyanGradient.addColorStop(1, "rgba(34, 211, 238, 0)");


function createMiniChart(name, color, data, bga) {

  new Chart(name, {
    type: "line",

    data: {
      labels: ["", "", "", "", "", "", "", "", "", "", "", ""],

      datasets: [{
        data: data,

        borderColor: color,
        backgroundColor: bga,

        borderWidth: 1.5,

        pointRadius: 2,
        pointHoverRadius: 3,

        pointBackgroundColor: color,
        pointBorderColor: color,

        tension: 0.35,

        fill: true
      }]
    },

    options: {

      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },

      scales: {
        x: {
          display: false,
          grid: {
            display: false
          }
        },

        y: {
          display: false,
          grid: {
            display: false
          }
        }
      },

      elements: {
        line: {
          capBezierPoints: true
        }
      }
    }
  });
}

createMiniChart(
  "projectCard",
  "#A855F7",
  [18, 22, 19, 27, 23, 31, 25, 21, 29, 24, 34, 39],
  purpleGradient
);

createMiniChart(
  "taskCard",
  "#22C55E",
  [15, 20, 17, 25, 21, 28, 23, 31, 26, 34, 30, 38],
  greenGradient
);

createMiniChart(
  "deliveryCard",
  "#3B82F6",
  [20, 17, 25, 19, 28, 22, 31, 26, 30, 24, 35, 31],
  blueGradient
);

createMiniChart(
  "productivityCard",
  "#F59E0B",
  [18, 25, 21, 29, 23, 31, 26, 33, 27, 35, 29, 32],
  orangeGradient
);

createMiniChart(
  "clientCard",
  "#FACC15",
  [17, 21, 19, 25, 22, 28, 24, 30, 26, 32, 29, 35],
  yellowGradient
);

createMiniChart(
  "billableCard",
  "#22D3EE",
  [20, 18, 24, 21, 27, 23, 29, 25, 32, 27, 34, 31],
  cyanGradient
);

new Chart(TrendChart, {
  type: 'line',

    data: {
      labels: [
        '1 May',
        '', '', '', '',
        '6 May',
        '', '', '', '',
        '11 May',
        '', '', '', '',
        '16 May',
        '', '', '', '',
        '21 May',
        '', '', '', '',
        '26 May',
        '', '', '', '',
        '31 May'
      ],

      datasets: [

        {
          label: 'Projects Completed',

          data: [
            62, 68, 72, 70, 78,
            72, 68, 74, 76, 75,
            74, 70, 72, 80, 68,
            62, 76, 76, 78, 80,
            84, 76, 75, 78, 80,
            85, 78, 74, 82, 88,
            94, 90
          ],

          borderColor: '#8B3DFF',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: '#8B3DFF',
          pointBorderColor: '#8B3DFF',
          tension: 0.25,
          fill: false
        },

        {
          label: 'Tasks Completed',

          data: [
            25, 25, 25, 25, 28,
            30, 32, 30, 27, 32,
            30, 30, 28, 34, 36,
            32, 30, 36, 38, 38,
            40, 28, 26, 30, 32,
            30, 28, 26, 38, 42,
            46, 50
          ],

          borderColor: '#22C55E',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [6, 5],
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: '#22C55E',
          pointBorderColor: '#22C55E',
          tension: 0.25,
          fill: false
        },

        {
          label: 'On-Time Delivery (%)',

          data: [
            50, 50, 50, 50, 51,
            48, 46, 58, 60, 58,
            55, 53, 58, 62, 58,
            52, 64, 63, 63, 62,
            58, 56, 54, 52, 53,
            53, 58, 62, 60, 64,
            66, 70
          ],

          borderColor: '#3B82F6',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: '#3B82F6',
          pointBorderColor: '#3B82F6',
          tension: 0.25,
          fill: false
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      interaction: {
        mode: 'index',
        intersect: false
      },

      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'start',
          labels: {
            color: '#A1A1AA',
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 8,
            boxHeight: 8,
            padding: 16,
            font: {
              size: 11
            }
          }
        },

        tooltip: {
          enabled: true
        }
      },
      scales: {

        x: {
          grid: {
            display: false
          },
          border: {
            color: '#25282D'
          },
          ticks: {
            color: '#A1A1AA',
            font: {
              size: 10
            },
            maxRotation: 0,
            autoSkip: false
          }
        },

        y: {
          min: 0,
          max: 100,

          ticks: {
            stepSize: 25,
            color: '#A1A1AA',
            font: {
              size: 10
            }
          },

          grid: {
            color: '#1C2630',
            drawTicks: false
          },

          border: {
            display: false
          }
        }
      }
    }
});

new Chart(categoryChart, {
  type: 'doughnut',
  data: {
   
    datasets: [{
      label: 'Projects',
      data: [40, 22, 16, 12, 9],
      backgroundColor: [
      "#7641EE",
      "#317BF0",
      "#32AD46",
      "#F5901D",
      "#7B818E"
       ], 
      borderWidth: 0
    }]
  },
    
});

 // Needle plugin
  const gaugeNeedle = {
    id: 'gaugeNeedle',

    afterDatasetDraw(chart) {

      const { ctx } = chart;

      const meta = chart.getDatasetMeta(0);
      const arc = meta.data[0];

      const x = arc.x;
      const y = arc.y;

      const value = chart.data.datasets[0].value;

      // 0 - 180 degree
      const angle =
        Math.PI + (Math.PI * value / 100);

      const needleLength = arc.outerRadius * 0.75;

      const needleX =
        x + Math.cos(angle) * needleLength;

      const needleY =
        y + Math.sin(angle) * needleLength;

      ctx.save();

      // Needle
      ctx.beginPath();

      ctx.moveTo(x, y);

      ctx.lineTo(needleX, needleY);

      ctx.lineWidth = 3;

      ctx.strokeStyle = '#FFFFFF';

      ctx.stroke();

      // Needle center
      ctx.beginPath();

      ctx.arc(x, y, 4, 0, Math.PI * 2);

      ctx.fillStyle = '#FFFFFF';

      ctx.fill();

      ctx.restore();
    }
  };

  const gaugeText = {
  id: 'gaugeText',

  afterDraw(chart) {

    const { ctx } = chart;

    const meta = chart.getDatasetMeta(0);
    const arc = meta.data[0];

    ctx.save();

    ctx.textAlign = 'center';

    ctx.fillStyle = '#FFFFFF';

    ctx.font = 'bold 24px Arial';

    ctx.fillText(
      '92.4%',
      arc.x,
      arc.y + 5
    );

    ctx.fillStyle = '#22C55E';

    ctx.font = 'bold 14px Arial';

    ctx.fillText(
      'On-Time',
      arc.x,
      arc.y + 30
    );

    ctx.restore();
  }
};


new Chart(onTimeGauge, {

    type: 'doughnut',

    data: {

      datasets: [{

        value: 92.4,

        data: [
          55,
          20,
          15,
          10
        ],

        backgroundColor: [
          '#22C55E',
          '#84CC16',
          '#F59E0B',
          '#EF4444'
        ],

        borderWidth: 0,

        circumference: 180,

        rotation: 270
      }]
    },

    options: {

      responsive: true,

      maintainAspectRatio: false,

      cutout: '65%',

      plugins: {

        legend: {
          display: false
        },

        tooltip: {
          enabled: false
        }
      }
    },

    plugins: [
      gaugeNeedle,
      gaugeText
    ]
});

const weeklyChart = new Chart(ctx, {
  type: 'bar',

  data: {
    labels: [
      '5-11 May',
      '12-18 May',
      '19-25 May',
      '26 May-1 Jun'
    ],

    datasets: [{
      data: [72.6, 76.8, 82.4, 87.6],

      backgroundColor: '#5B2CC9',

      borderRadius: {
        topLeft: 2,
        topRight: 2,
        bottomLeft: 0,
        bottomRight: 0
      },

      borderSkipped: false,

      barPercentage: 0.55,
      categoryPercentage: 0.75
    }]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false
      },

      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            return context.raw + '%';
          }
        }
      }
    },

    scales: {
      x: {
        grid: {
          display: false
        },

        border: {
          display: false
        },

        ticks: {
          color: '#8B8D91',
          font: {
            size: 10
          }
        }
      },

      y: {
        min: 0,
        max: 100,

        ticks: {
          stepSize: 25,

          color: '#8B8D91',

          font: {
            size: 10
          },

          callback: function(value) {
            return value + '%';
          }
        },

        grid: {
          color: '#24282D',
          lineWidth: 1
        },

        border: {
          display: false
        }
      }
    }
  },

  plugins: [{
    id: 'valueLabels',

    afterDatasetsDraw(chart) {
      const { ctx } = chart;

      ctx.save();

      chart.data.datasets[0].data.forEach((value, index) => {
        const meta = chart.getDatasetMeta(0);
        const bar = meta.data[index];

        ctx.fillStyle = '#D4D4D8';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        ctx.fillText(
          value + '%',
          bar.x,
          bar.y - 5
        );
      });

      ctx.restore();
    }
  }]
});