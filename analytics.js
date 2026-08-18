const revenue = document.getElementById('revenue').getContext('2d');
const expenses = document.getElementById('expenses').getContext('2d');
const profit = document.getElementById('profit').getContext('2d');
const client = document.getElementById('client').getContext('2d');
const Project = document.getElementById('Project').getContext('2d');
const chart = document.getElementById('revenueExpenseChart').getContext('2d');
const overview = document.getElementById('overviewChart').getContext('2d');
const myChart = document.getElementById('myChart');
const taskChart = document.getElementById('taskChart');
const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
const invoiceChart = document.getElementById('invoiceChart');
const cashChart = document.getElementById('cashChart').getContext('2d');


const purpleGradient = revenue.createLinearGradient(0, 0, 0, 100);
purpleGradient.addColorStop(0, 'rgba(139, 58, 255, 0.25)');
purpleGradient.addColorStop(1, 'rgba(139, 58, 255, 0)');

const redGradient = expenses.createLinearGradient(0, 0, 0, 100);
redGradient.addColorStop(0, 'rgba(239, 68, 68, 0.25)');
redGradient.addColorStop(1, 'rgba(239, 68, 68, 0)');

const greenGradient = profit.createLinearGradient(0, 0, 0, 100);  
greenGradient.addColorStop(0, 'rgba(34, 197, 94, 0.25)');
greenGradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

const blueGradient = client.createLinearGradient(0, 0, 0, 100);
blueGradient.addColorStop(0, 'rgba(59, 130, 246, 0.25)');
blueGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

const orangeGradient = Project.createLinearGradient(0, 0, 0, 100);
orangeGradient.addColorStop(0, 'rgba(245, 158, 11, 0.25)');
orangeGradient.addColorStop(1, 'rgba(245, 158, 11, 0)');

const _greenGradient = overview.createLinearGradient(0, 0, 0, 100);  
greenGradient.addColorStop(0, 'rgba(34, 197, 94, 0.25)');
greenGradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

const monthlyGradient = monthlyCtx.createLinearGradient(0, 0, 0, 260);
monthlyGradient.addColorStop(0,'rgba(139, 58, 255, 0.25)');
monthlyGradient.addColorStop(1,'rgba(139, 58, 255, 0)');

const growthGradient = cashChart.createLinearGradient(0, 0, 0, 180);
growthGradient.addColorStop(0,'rgba(139, 58, 255, 0.30)');
growthGradient.addColorStop(1,'rgba(139, 58, 255, 0)');


new Chart(revenue, {
  type: 'line',

  data: {
    labels: [
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', ''
    ],

    datasets: [{
      data: [
        18, 35, 25, 42, 38, 43,
        31, 35, 28, 40, 25, 35,
        38, 37, 48, 42, 55, 50
      ],

      borderColor: '#8B3DFF',
      backgroundColor: purpleGradient,

      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,

      tension: 0.4,

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

new Chart(expenses, {
  type: 'line',

  data: {
    labels: [
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', ''
    ],

    datasets: [{
      data: [
        18, 35, 25, 42, 38, 43,
        31, 35, 28, 40, 25, 35,
        38, 37, 48, 42, 55, 50
      ],

      borderColor: '#EF4444',
      backgroundColor: redGradient,

      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,

      tension: 0.4,

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

new Chart(profit, {
  type: 'line',

  data: {
    labels: [
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', ''
    ],

    datasets: [{
      data: [
        18, 35, 25, 42, 38, 43,
        31, 35, 28, 40, 25, 35,
        38, 37, 48, 42, 55, 50
      ],

      borderColor: '#22C55E',
      backgroundColor: greenGradient,

      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,

      tension: 0.4,

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

new Chart(client, {
  type: 'line',

  data: {
    labels: [
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', ''
    ],

    datasets: [{
      data: [
        18, 35, 25, 42, 38, 43,
        31, 35, 28, 40, 25, 35,
        38, 37, 48, 42, 55, 50
      ],

      borderColor: '#3B82F6',
      backgroundColor: blueGradient,

      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,

      tension: 0.4,

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

new Chart(Project, {
  type: 'line',

  data: {
    labels: [
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', ''
    ],

    datasets: [{
      data: [
        18, 35, 25, 42, 38, 43,
        31, 35, 28, 40, 25, 35,
        38, 37, 48, 42, 55, 50
      ],

      borderColor: '#F59E0B',
      backgroundColor: orangeGradient,

      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,

      tension: 0.4,

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

new Chart(chart, {
    type: 'bar',

    data: {
      labels: [
        '1 May',
        '6 May',
        '11 May',
        '16 May',
        '21 May',
        '26 May',
        '31 May'
      ],

      datasets: [
        {
          label: 'Revenue',

          data: [
            45000,
            95000,
            62000,
            110000,
            103000,
            90000,
            98000
          ],

          backgroundColor: '#8B3DFF',
          borderRadius: 2,

          barThickness: 8,
          categoryPercentage: 0.7,
          barPercentage: 0.8
        },

        {
          label: 'Expenses',

          data: [
            38000,
            33000,
            39000,
            50000,
            39000,
            39000,
            45000
          ],

          backgroundColor: '#EF4444',
          borderRadius: 2,

          barThickness: 8,
          categoryPercentage: 0.7,
          barPercentage: 0.8
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
          position: 'top',
          align: 'start',

          labels: {
            color: '#A1A1AA',

            usePointStyle: true,
            pointStyle: 'circle',

            boxWidth: 7,
            boxHeight: 7,

            padding: 15,

            font: {
              size: 12
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
            display: false
          },

          ticks: {
            color: '#71717A',
            font: {
              size: 10
            }
          }
        },

        y: {
          beginAtZero: true,

          max: 120000,

          ticks: {
            stepSize: 20000,

            color: '#71717A',

            font: {
              size: 10
            },

            callback: function(value) {
              return '₹' + (value / 1000) + 'K';
            }
          },

          grid: {
            color: '#1F2937',

            drawTicks: false
          },

          border: {
            display: false
          }
        }
      }
    }
});

 new Chart(overview, {
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

      datasets: [{
        data: [
          18, 22, 25, 28, 32,
          28, 29, 45, 48, 52,
          56, 40, 38, 48, 52,
          65, 57, 50, 44, 40,
          48, 55, 70, 68, 70,
          58, 55, 45, 43, 68,
          72, 58, 59, 75, 60,
          61, 88
        ],

        borderColor: '#22C55E',
        backgroundColor: _greenGradient,

        borderWidth: 2,

        pointBackgroundColor: '#22C55E',
        pointBorderColor: '#22C55E',

        pointRadius: 2,
        pointHoverRadius: 4,

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
          enabled: true,

          callbacks: {
            label: function(context) {
              return ' ₹' + context.raw + 'K';
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

            autoSkip: false,
            maxRotation: 0,
            minRotation: 0
          }
        },

        y: {
          min: 0,
          max: 100,

          ticks: {
            stepSize: 20,

            color: '#A1A1AA',

            font: {
              size: 10
            },

            callback: function(value) {
              return '₹' + value + 'K';
            }
          },

          grid: {
            color: '#1F2937'
          },

          border: {
            display: false
          }
        }
      }
    }
});

new Chart(myChart, {
    type: 'doughnut',
    data: {
     
      datasets: [{
        label: '',
        data: [50, 25, 15, 10,],
        backgroundColor: [
        "#6D4AE3",
        "#EF4444",
        "#22C55E",
        "#F59E0B",
         ], 
        borderWidth: 0
      }]
    },
    
});

new Chart(taskChart, {
    type: 'doughnut',
    data: {
     
      datasets: [{
        label: '',
        data: [128, 72, 36, 12,],
        backgroundColor: [
        "#22C55E",
        "#6D4AE3",
        "#F59E0B",
        "#EF4444",
         ], 
        borderWidth: 0
      }]
    },
    
});

new Chart(monthlyCtx, {
    type: 'line',

    data: {
      labels: ['Dec','Jan','Feb','Mar','Apr','May'],
      datasets: [{
        data: [35,105,138,168,205,235],

        borderColor: '#8B3DFF',
        backgroundColor: monthlyGradient,

        borderWidth: 2,

        pointBackgroundColor: '#8B3DFF',
        pointBorderColor: '#8B3DFF',

        pointRadius: 5,
        pointHoverRadius: 6,

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
          enabled: true,

          callbacks: {
            label: function(context) {
              return context.raw;
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
              size: 12
            }
          }
        },

        y: {
          min: 0,
          max: 250,

          ticks: {
            stepSize: 50,

            color: '#A1A1AA',

            font: {
              size: 11
            }
          },

          grid: {
            color: '#1F2937'
          },

          border: {
            display: false
          }
        }
      }
    }
});

new Chart(invoiceChart, {
    type: 'doughnut',
    data: {
     
      datasets: [{
        label: '',
        data: [75, 24],
        backgroundColor: [
        "#6D4AE3",
        "#22C55E",
         ], 
        borderWidth: 0
      }]
    },
    
});

new Chart(cashChart, {
    type: 'line',

    data: {
      labels: [
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        '', '', '', ''
      ],

      datasets: [{
        data: [
          35, 48, 30, 52, 42,
          58, 68, 55, 44, 50,
          48, 55, 62, 75, 68,
          58, 72, 65, 78, 70,
          74, 76, 85, 96, 88,
          92, 90, 105, 98, 115
        ],

        borderColor: '#8B3DFF',
        backgroundColor: growthGradient,

        borderWidth: 2,

        pointRadius: 0,
        pointHoverRadius: 4,

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
          enabled: true,

          callbacks: {
            label: function(context) {
              return context.raw;
            }
          }
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
      }
    }
  });