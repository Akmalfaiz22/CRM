const ctx = document.getElementById('myChart');
const lineChart = document.getElementById('lineChart');
const wallet = document.getElementById('wallet');


const createColor = lineChart.getContext('2d');
const gradient = createColor.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(124, 58, 237, 0.35)');
gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

new Chart(ctx, {
  type: 'doughnut',
  data: {
   
    datasets: [{
       labels: [
         "Software & Tools",
         "Marketing",
         "Travel & Meals",
         "Hardware",
         "Office Supplies",
         "Others"
       ],
      data: [20, 18, 15, 12, 10, 25],
      backgroundColor: [
      "#4BCC75",
      "#FBA12A",
      "#FB435D",
      "#3D4A95",
      "#2F1B6F",
      "#A855F7",
       ], 
      borderWidth: 0
    }]
  },
    
});

new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['', 'Jan', '', 'Feb', '', 'Apr', '', 'May', ''],
    datasets: [{
      label: 'Monthly Spends',

      data: [
        15000,
        21000,
        22000,
        18000,
        25000,
        33000,
        25000,
        30000
      ],

      borderColor: '#7C3AED',
     backgroundColor: gradient,

     borderWidth: 2,
     fill: true,
      // line ko smooth karta hai
     tension: 0.3,
     // purple dots
     pointRadius: 3,
     pointBackgroundColor: '#8B5CF6',
     pointBorderWidth: 0
   }]
  },
  options: {
    scales: {
      y: {
          beginAtZero: true,
          max: 50000,
          ticks: {
            stepSize: 10000,
            color: '#737782',

            callback: function(value) {
              if (value === 0) return '₹0';

              return '₹' + (value / 1000) + 'k';
            }
          }
      }
    }
  }
});

new Chart(wallet, {
  type: 'doughnut',
  data: {
     
    datasets: [{
       labels: [
          "Budget Remaining",
          "Monthly Budget"
       ],
      data: [37550, 100000],
      backgroundColor: [
       "#4ADE80",
       "#60A5FA" 
       ], 
      borderWidth: 0
    }]
  },
  
});