const settingSidebar = {
    Organization: "organization.html",
    Members: "members.html"
    
};

Object.entries(settingSidebar).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});