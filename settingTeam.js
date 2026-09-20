const brandBtn = {
    settingInformation: "organization.html",
    settingBranding: "brand.html",
    settingBilling: "billing.html"
};

Object.entries(brandBtn).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});