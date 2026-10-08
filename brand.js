const brandBtn = {
    settingInformation: "organization.html",
    settingTeam: "settingTeam.html",
    settingBilling: "billing.html",
    Members: "members.html",
    Profile: "setting.html",
    Preferences: "settingPreference.html"
};

Object.entries(brandBtn).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});