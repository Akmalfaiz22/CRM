const organizationBtn = {
    settingBranding: "brand.html",
    settingTeam: "settingTeam.html",
    settingBilling: "billing.html",
    Members: "members.html",
    Profile: "setting.html",
    Preferences: "settingPreference.html"
};

Object.entries(organizationBtn).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});