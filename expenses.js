const ctx = document.getElementById('myChart');
const lineChart = document.getElementById('lineChart');
const wallet = document.getElementById('wallet');
const indexSide = document.getElementById('indexSide');
const inboxSide = document.getElementById('inboxSide');
const clientSide = document.getElementById('clientSide');
const taskSide = document.getElementById('taskSide');
const kanbanSide = document.getElementById('kanbanSide');
const projectSide = document.getElementById('projectSide');
const calenderSide = document.getElementById('calenderSide');
const paymentSide = document.getElementById('paymentSide');
const invoiceSide = document.getElementById('invoiceSide');
const teamSide = document.getElementById('teamSide');
const analyticsSide = document.getElementById('analyticsSide');
const revenueSide = document.getElementById('revenueSide');
const performanceSide = document.getElementById('performanceSide');
const documentSide = document.getElementById('documentSide');
const mediaSide = document.getElementById('mediaSide');
const filesSide = document.getElementById('filesSide');
const messageSide = document.getElementById('messageSide');
const helpSide = document.getElementById('helpSide');
const settingSide = document.getElementById('settingSide');

const createColor = lineChart.getContext('2d');
const gradient = createColor.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(124, 58, 237, 0.35)');
gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

new Chart(ctx, {
  type: 'doughnut',
  data: {
   
    datasets: [{
       labels: [
         "Software & Tools",
         "Marketing",
         "Travel & Meals",
         "Hardware",
         "Office Supplies",
         "Others"
       ],
      data: [20, 18, 15, 12, 10, 25],
      backgroundColor: [
      "#4BCC75",
      "#FBA12A",
      "#FB435D",
      "#3D4A95",
      "#2F1B6F",
      "#A855F7",
       ], 
      borderWidth: 0
    }]
  },
    
});

new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['', 'Jan', '', 'Feb', '', 'Apr', '', 'May', ''],
    datasets: [{
      label: 'Monthly Spends',

      data: [
        15000,
        21000,
        22000,
        18000,
        25000,
        33000,
        25000,
        30000
      ],

      borderColor: '#7C3AED',
     backgroundColor: gradient,

     borderWidth: 2,
     fill: true,
      // line ko smooth karta hai
     tension: 0.3,
     // purple dots
     pointRadius: 3,
     pointBackgroundColor: '#8B5CF6',
     pointBorderWidth: 0
   }]
  },
  options: {
    scales: {
      y: {
          beginAtZero: true,
          max: 50000,
          ticks: {
            stepSize: 10000,
            color: '#737782',

            callback: function(value) {
              if (value === 0) return '₹0';

              return '₹' + (value / 1000) + 'k';
            }
          }
      }
    }
  }
});

new Chart(wallet, {
  type: 'doughnut',
  data: {
     
    datasets: [{
       labels: [
          "Budget Remaining",
          "Monthly Budget"
       ],
      data: [37550, 100000],
      backgroundColor: [
       "#4ADE80",
       "#60A5FA" 
       ], 
      borderWidth: 0
    }]
  },
  
});

indexSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/index.html"
})

inboxSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/inbox.html"
})

clientSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/client.html"
})

taskSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/task.html"
})

kanbanSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/kanban.html"
})

projectSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/project.html"
})

calenderSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/calendar.html"
})

paymentSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/payment.html"
})

invoiceSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/invoice.html"
})

teamSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/team.html"
})

analyticsSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/analytics.html"
})
