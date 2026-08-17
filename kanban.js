const todoBtn = document.getElementById('todoBtn');
const progressBtn = document.getElementById('progressBtn');
const reviewBtn = document.getElementById('reviewBtn');
const doneBtn = document.getElementById('doneBtn');
const blockBtn = document.getElementById('blockBtn');
const indexSide = document.getElementById('indexSide');
const inboxSide = document.getElementById('inboxSide');
const clientSide = document.getElementById('clientSide');
const projectSide = document.getElementById('projectSide');
const taskSide = document.getElementById('taskSide');
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

const sections = ["todo", "progress", "review", "done", "block"];

function showSection(id) {
  sections.forEach(section => {
    document.getElementById(section).classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}

todoBtn.addEventListener("click", () => {
    showSection("todo")
});

progressBtn.addEventListener("click", () =>{
     showSection("progress")
});

reviewBtn.addEventListener("click", () => {
     showSection("review")
});

doneBtn.addEventListener("click", () => {
    showSection("done")
});

blockBtn.addEventListener("click", () => {
    showSection("block")
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

projectSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/project.html"
})

taskSide.addEventListener("click", () => {
  location.href = "http://localhost:3000/task.html"
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