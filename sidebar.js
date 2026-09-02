const pages = {
    indexSide: "index.html",
    inboxSide: "inbox.html",
    clientSide: "client.html",
    projectSide: "project.html",
    taskSide: "task.html",
    kanbanSide: "kanban.html",
    teamSide: "team.html",
    calenderSide: "calendar.html",
    paymentSide: "payment.html",
    invoiceSide: "invoice.html",
    expensesSide: "expenses.html",
    analyticsSide: "analytics.html",
    revenueSide: "revenue.html",
    performanceSide: "performance.html",
    documentSide: "document.html",
    mediaSide: "media.html",
    filesSide: "file.html",
    messageSide: "message.html",
    helpSide: "help.html",
    settingSide: "setting.html",
    notificationNav: "notification.html"
};

Object.entries(pages).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});