// ==============================
// Usage Trend Line Chart
// ==============================

const usageTrend = document.getElementById("usageTrendChart");

new Chart(usageTrend, {

    type: "line",

    data: {

        labels: [
            ["May", "2025"],
            ["Jun", "2025"],
            ["Jul", "2025"],
            ["Aug", "2025"],
            ["Sep", "2025"],
            ["Oct", "2025"]
        ],

        datasets: [

            {
                label: "Cost",

                data: [200, 350, 420, 470, 400, 342],

                borderColor: "#8B00FF",

                backgroundColor: "#8B00FF",

                borderWidth: 2,

                pointRadius: 3,

                pointHoverRadius: 6,

                pointBackgroundColor: "#A855F7",

                pointBorderColor: "#ffffff",

                tension: 0.4
            },

            {
                label: "API Calls",

                data: [90, 210, 270, 320, 280, 200],

                borderColor: "#1685FF",

                backgroundColor: "#1685FF",

                borderWidth: 2,

                pointRadius: 3,

                pointHoverRadius: 6,

                pointBackgroundColor: "#1685FF",

                pointBorderColor: "#ffffff",

                tension: 0.4
            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        interaction: {
            intersect: false,
            mode: "index"
        },

        plugins: {

            legend: {
                display: false
            },

            tooltip: {

                backgroundColor: "#101D27",

                titleColor: "#ffffff",

                bodyColor: "#d1d5db",

                borderColor: "#2A2A2E",

                borderWidth: 1,

                padding: 10
            }

        },

        scales: {

            x: {

                grid: {
                    color: "#172D3A"
                },

                ticks: {
                    color: "#A1A1AA",
                    font: {
                        size: 10
                    }
                },

                border: {
                    display: false
                }

            },

            y: {

                min: 0,

                max: 600,

                ticks: {

                    stepSize: 200,

                    color: "#A1A1AA",

                    callback: function(value) {
                        return "$" + value;
                    },

                    font: {
                        size: 10
                    }

                },

                grid: {
                    color: "#172D3A"
                },

                border: {
                    display: false
                }

            }

        }

    }

});


// ==============================
// Usage Breakdown Doughnut Chart
// ==============================

const usageBreakdown = document.getElementById("usageBreakdownChart");

new Chart(usageBreakdown, {

    type: "doughnut",

    data: {

        labels: [
            "Projects",
            "API Calls",
            "Storage"
        ],

        datasets: [{

            data: [52, 34, 14],

            backgroundColor: [
                "#7500F5",
                "#0875F5",
                "#00C99A"
            ],

            borderWidth: 0,

            hoverOffset: 5

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "72%",

        plugins: {

            legend: {
                display: false
            },

            tooltip: {

                backgroundColor: "#101D27",

                titleColor: "#ffffff",

                bodyColor: "#d1d5db",

                padding: 10

            }

        }

    }

});