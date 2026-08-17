const ctx = document.getElementById('myChart');
const indexSide = document.getElementById('indexSide');
const inboxSide = document.getElementById('inboxSide');
const clientSide = document.getElementById('clientSide');
const taskSide = document.getElementById('taskSide');
const kanbanSide = document.getElementById('kanbanSide');
const projectSide = document.getElementById('projectSide');
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

new Chart(ctx, {
  type: 'doughnut',
  data: {
   
    datasets: [{
      label: '',
      data: [8, 4, 4, 3, 2, 3],
      backgroundColor: [
      "#6D4AE3",
      "#8B5CF6",
      "#F97316",
      "#5FA56F",
      "#607D7F",
      "#D9A441"
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

expensesSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/expenses.html"
})

analyticsSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/analytics.html"
})