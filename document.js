const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
   
    datasets: [{
      label: '',
      data: [18, 4, 2],
      backgroundColor: [
      "#6D28D9",
      "#0084FF",
      "#00C853",
       ], 
      borderWidth: 0
    }]
  },
    
});