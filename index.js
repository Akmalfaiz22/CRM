const revenueChart = document.getElementById('revenueChart');
const projectStatus = document.getElementById('projectStatus');

new Chart(revenueChart, {
 type: 'line',
 data: {
   labels: ['1 jul', '5 jul', '10 jul', '15 jul', '20 jul', '25 jul', '31 jul'],
   datasets: [{
     label: 'This Month',
     data: [45000, 32000, 70000, 68000, 50000, 78000, 72000],
     borderColor: "#7C3AED",
     backgroundColor: "rgba(124,58,237,0.2)",
     fill: true,
     tension: 0.4,
     pointRadius: 0
   },
    {
     label: "Last Month",
     data: [38000, 35000, 42000, 46000, 55000, 62000, 68000],
     borderColor: "#9CA3AF",
     borderDash: [5, 5],
     fill: false,
     tension: 0.4,
     pointRadius: 0
   }
 ]
 },
 options: {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
   legend: {
     labels: {
       color: "#fff"
     }
   }
  },
 scales: {
   y: {
     min: 0,
     max: 100000,
     ticks: {
       color: "#fff",
       callback: (value) => "₹" + value / 1000 + "K"
     }
   },
   x: {
     ticks: {
       color: "#fff"
     }
   }
  }
 }
});

new Chart(projectStatus, {
  type: 'doughnut',
  data: {
   
    datasets: [{
      label: 'Projects',
      data: [8, 10, 3, 3],
      backgroundColor: [
      "#4ADE80",
      "#3B82F6",
      "#F59E0B",
      "#8B5CF6"
       ], 
      borderWidth: 0
    }]
  },
    
});