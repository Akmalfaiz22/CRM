const OverviewChart = document.getElementById('activityOverviewChart')

new Chart(OverviewChart, {

    type: "bar",

    data: {

        labels: [
            "Jun 1", "", "", "", "", "", "", 
            "Jun 8", "", "", "", "", "", "",
            "Jun 15", "", "", "", "", "", "",
            "Jun 22", "", "", "", "", "", "",
            "Jun 30"
        ],

        datasets: [{
            data: [
                48, 52, 88, 45, 140, 72, 108,
                172, 65, 98, 152, 68, 58, 101,
                118, 82, 140, 50, 165, 102
            ],

            backgroundColor: "#6D28D9",

            borderRadius: 3,

            borderSkipped: false,

            barPercentage: 0.65,

            categoryPercentage: 0.8
        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            },

            tooltip: {
                enabled: true,

                backgroundColor: "#1A1B1C",

                borderColor: "#2E2E32",

                borderWidth: 1,

                titleColor: "#E5E7EB",

                bodyColor: "#9CA3AF",

                padding: 10
            }

        },

        scales: {

            x: {

                grid: {
                    display: false
                },

                border: {
                    color: "#2E2E32"
                },

                ticks: {
                    color: "#9CA3AF",

                    font: {
                        size: 10
                    },

                    maxRotation: 0,

                    autoSkip: false
                }
            },

            y: {

                beginAtZero: true,

                max: 200,

                ticks: {

                    stepSize: 50,

                    color: "#9CA3AF",

                    font: {
                        size: 10
                    }
                },

                grid: {
                    color: "#20252A"
                },

                border: {
                    color: "#2E2E32"
                }
            }

        }

    }

});

const settingSidebar = {
    Organization: "organization.html",
    Profile: "setting.html",
    settingRoles: "memberRole.html",
    settingDepartments: "memberDepartment.html",
    settingTeamMembers: "members.html"

};

Object.entries(settingSidebar).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});