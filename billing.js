const brandBtn = {
    settingInformation: "organization.html",
    settingBranding: "brand.html",
    settingTeam: "settingTeam.html",
    Members: "members.html",
    Profile: "setting.html"
};

Object.entries(brandBtn).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});