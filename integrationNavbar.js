const settingSidebar = {
    Profile: "setting.html",
    Organization: "organization.html",
    Members: "members.html",
    Preferences: "settingPreference.html",
    Security: "settingSecurity.html",
    Integrations: "settingIntegrations.html",
    Connected: "integrationConnect.html",
    Communication: "integrationCom.html",
    Development: "integrationDevelopment.html",
    Marketing: "integrationMarket.html",
    Payments: "integrationpayment.html",
    Notifications: "settingNotification.html",

};

Object.entries(settingSidebar).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});