const team = document.getElementById('myTeam');
const settingSidebar = {
    Organization: "organization.html",
    Profile: "setting.html",
    settingRoles: "memberRole.html",
    settingDepartments: "memberDepartment.html",
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

new Chart(team, {
  type: 'doughnut',
  data: {
   
    datasets: [{
       labels: [
         "Owner",
         "Admin",
         "Member",
         "Viewer",
       ],
      data: [1, 1, 4, 1],
      backgroundColor: [
        "#7C3AED",
        "#3882F6",
        "#CBD5E1",
        "#F59E0B"
      
       ], 
      borderWidth: 0
    }]
  },
    
});