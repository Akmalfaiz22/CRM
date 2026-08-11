const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
   
    datasets: [{
      label: '',
      data: [1865000, 525000, 115000, 25000],
      backgroundColor: [
      "#3BAA64",
      "#F97316",
      "#EF4444",
      "#7C3AED",
       ], 
      borderWidth: 0
    }]
  },
    
});