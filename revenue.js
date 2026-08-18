const revenue = document.getElementById('revenueOverview').getContext('2d');
const projectStatus = document.getElementById('projectStatus');
const projectedRevenueChart = document.getElementById('projectedRevenueChart').getContext('2d');


const revenueGradient = revenue.createLinearGradient(0, 0, 0, 260);
revenueGradient.addColorStop(0,'rgba(139, 61, 255, 0.25)');
revenueGradient.addColorStop(1,'rgba(139, 61, 255, 0)');

const RevenueChartGradient = projectedRevenueChart.createLinearGradient(0, 0, 0, 300);
RevenueChartGradient.addColorStop(0,'rgba(139, 61, 255, 0.30)');
RevenueChartGradient.addColorStop(1,'rgba(139, 61, 255, 0)');


new Chart(revenue, {
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
          label: 'Revenue',

          data: [
            25000,42000,50000,43000,55000,75000,95000,90000,80000,
            90000,70000,65000,80000,90000,105000,85000,70000,75000,
            85000,90000,105000,112000,118000,105000,100000,105000,
            95000,108000,115000,120000,125000
          ],

          borderColor: '#8B3DFF',
          backgroundColor: revenueGradient,
          borderWidth: 2,
          pointRadius: 2,
          pointHoverRadius: 5,
          pointBackgroundColor: '#8B3DFF',
          pointBorderColor: '#8B3DFF',
          tension: 0.3,
          fill: true
        },        
        {
          label: 'Revenue (Previous Period)',

          data: [
            35000,40000,42000,38000,45000,50000,55000,50000,45000,
            52000,48000,42000,50000,55000,50000,45000,55000,50000,
            58000,48000,45000,42000,50000,60000,55000,62000,58000,
            55000,60000,75000,90000
          ],
          borderColor: 'rgba(139, 61, 255, 0.35)',
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderDash: [5, 5],
          pointRadius: 2,
          pointHoverRadius: 4,
          pointBackgroundColor: '#1F2937',
          pointBorderColor: 'rgba(139, 61, 255, 0.4)',
          tension: 0.3,
          fill: false
        }

      ]
    },

    options: {

      responsive: true,
      maintainAspectRatio: false,

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
            padding: 18,
            font: {
              size: 11
            }
          }
        },


        tooltip: {
          enabled: true,
          callbacks: {
            label: function(context) {
              return (
                context.dataset.label +
                ': ₹' +
                context.raw.toLocaleString('en-IN')
              );
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
          max: 125000,
          ticks: {
            stepSize: 25000,
            color: '#A1A1AA',
            font: {
              size: 10
            },
            callback: function(value) {
              if (value === 0) {
                return '₹0';
              }

              return '₹' + (value / 1000) + 'K';

            }
          },

          grid: {
            color: '#1C2430',
            drawTicks: false
          },

          border: {
            display: false
          }
        }
      }
    }
});

new Chart(projectStatus, {
  type: 'doughnut',
  data: {
   
    datasets: [{
      label: 'Projects',
      data: [50, 25, 15, 10],
      backgroundColor: [
      "#7139E9",
      "#3E80E4",
      "#3EB85C",
      "#D39227"
       ], 
      borderWidth: 0
    }]
  },
    
});

new Chart(projectedRevenueChart, {
    type: 'line',
    data: {
      labels: [
        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug',
        'Sep','Oct','Nov','Dec'
      ],

      datasets: [

        {
          label: 'Actual Revenue',
          data: [
            0.8, 1.2, 1.3, 1.5, 2.2, 2.6
          ],
          borderColor: '#8B3DFF',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 6,
          pointBackgroundColor: '#8B3DFF',
          pointBorderColor: '#8B3DFF',
          tension: 0.25,
          fill: false
        },

        {
          label: 'Projected Revenue',

          data: [
            null, null, null, null, 2.2, 2.6, 3.0, 3.2,
            3.5, 3.7, 3.9, 4.5
          ],

          borderColor: 'rgba(139, 61, 255, 0.55)',
          backgroundColor: RevenueChartGradient,
          borderWidth: 2,
          borderDash: [6, 5],
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: '#8B3DFF',
          pointBorderColor: '#8B3DFF',
          tension: 0.25,
          fill: true
        }
      ]
    },

    options: {

      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#A1A1AA',
            usePointStyle: false,
            boxWidth: 35,
            padding: 25,
            font: {
              size: 12
            }
          }
        },

        tooltip: {
          enabled: true,
          callbacks: {
            label: function(context) {
              return (
                context.dataset.label +
                ': ₹' +
                context.raw +
                'L'
              );
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
            color: '#252B35'
          },
          ticks: {
            color: '#A1A1AA',
            font: {
              size: 12
            }
          }
        },

        y: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            color: '#A1A1AA',
            font: {
              size: 11
            },
            callback: function(value) {
              return '₹' + value + 'L';
            }
          },
          grid: {
            color: '#1C2632',
            drawTicks: false
          },
          border: {
            display: false
          }
        }
      }
    }
});