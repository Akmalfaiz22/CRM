const organizationBtn = {
    settingBranding: "brand.html",
    settingTeam: "settingTeam.html"
    
};

Object.entries(organizationBtn).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});