const settingSidebar = {
    Organization: "organization.html",
    Profile: "setting.html",
    settingDepartments: "memberDepartment.html",
    settingTeamMembers: "members.html",
    settingActivity: "memberActivity.html"

};

Object.entries(settingSidebar).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});