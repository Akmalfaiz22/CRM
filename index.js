const revenueChart = document.getElementById('revenueChart');
const projectStatus = document.getElementById('projectStatus');
const inboxSide = document.getElementById('inboxSide');
const clientSide = document.getElementById('clientSide');
const projectSide = document.getElementById('projectSide');
const taskSide = document.getElementById('taskSide');
const kanbanSide = document.getElementById('kanbanSide');
const teamSide = document.getElementById('teamSide');
const calenderSide = document.getElementById('calenderSide');
const paymentSide = document.getElementById('paymentSide');
const invoiceSide = document.getElementById('invoiceSide');
const expensesSide = document.getElementById('expensesSide');
const analyticsSide = document.getElementById('analyticsSide');
const revenueSide = document.getElementById('revenueSide');
const performanceSide = document.getElementById('performanceSide');
const documentSide = document.getElementById('documentSide');
const mediaSide = document.getElementById('mediaSide');
const filesSide = document.getElementById('filesSide');
const messageSide = document.getElementById('messageSide');
const helpSide = document.getElementById('helpSide');
const settingSide = document.getElementById('settingSide');

new Chart(revenueChart, {
 type: 'line',
 data: {
   labels: ['1 jul', '5 jul', '10 jul', '15 jul', '20 jul', '25 jul', '31 jul'],
   datasets: [{
     label: 'This Month',
     data: [45000, 32000, 70000, 68000, 50000, 78000, 72000],
     borderColor: "#7C3AED",
     backgroundColor: "rgba(124,58,237,0.2)",
     fill: true,
     tension: 0.4,
     pointRadius: 0
   },
    {
     label: "Last Month",
     data: [38000, 35000, 42000, 46000, 55000, 62000, 68000],
     borderColor: "#9CA3AF",
     borderDash: [5, 5],
     fill: false,
     tension: 0.4,
     pointRadius: 0
   }
 ]
 },
 options: {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
   legend: {
     labels: {
       color: "#fff"
     }
   }
  },
 scales: {
   y: {
     min: 0,
     max: 100000,
     ticks: {
       color: "#fff",
       callback: (value) => "₹" + value / 1000 + "K"
     }
   },
   x: {
     ticks: {
       color: "#fff"
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
      data: [8, 10, 3, 3],
      backgroundColor: [
      "#4ADE80",
      "#3B82F6",
      "#F59E0B",
      "#8B5CF6"
       ], 
      borderWidth: 0
    }]
  },
    
});

inboxSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/inbox.html"
})

clientSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/client.html"
})

projectSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/project.html"
})

taskSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/task.html"
})

kanbanSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/kanban.html"
})

teamSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/team.html"
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

expensesSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/expenses.html"
})

analyticsSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/analytics.html"
})