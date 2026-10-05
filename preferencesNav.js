const settingSidebar = {
    Organization: "organization.html",
    Profile: "setting.html",
    Members: "members.html",
    preferenceGeneral: "settingPreference.html",
    preferenceAppearance: "preferenceAppear.html",
    preferenceLocalization: "preferenceLocalization.html",
    preferenceWorkspace: "preferenceWorkspace.html",
    preferenceEmail: "preferenceEmail.html",


};

Object.entries(settingSidebar).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});