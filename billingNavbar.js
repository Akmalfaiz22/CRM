const settingSidebar = {
    Profile: "setting.html",
    Organization: "organization.html",
    Members: "members.html",
    Preferences: "settingPreference.html",
    Security: "settingSecurity.html",
    Integrations: "settingIntegrations.html",
    Overview: "settingBilling.html",
    Plans: "billingPlans.html",
    Usage: "billingUsage.html",
    Invoices: "billingInvoice.html",
    Methods: "billingMethod.html",
    Billing: "billingHistory.html",
    Notifications: "settingNotification.html",

};

Object.entries(settingSidebar).forEach(([id, page]) => {
    document.querySelectorAll(`[id="${id}"]`).forEach((element) => {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    });
});