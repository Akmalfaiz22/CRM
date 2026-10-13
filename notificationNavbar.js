const settingSidebar = {
    Profile: "setting.html",
    Organization: "organization.html",
    Members: "members.html",
    Preferences: "settingPreference.html",
    notificationEmail: "settingNotification.html",
    notificationInapp: "notificationInapp.html",
    notificationSms: "notificationSMS.html",
    notificationPush: "notificationPush.html",
    Security: "settingSecurity.html"
};

Object.entries(settingSidebar).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});