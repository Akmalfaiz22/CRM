const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
   
    datasets: [{
      label: '',
      data: [30, 3, 3],
      backgroundColor: [
      "#6D28D9",
      "#0084FF",
      "#00C853",
       ], 
      borderWidth: 0
    }]
  },
    
});