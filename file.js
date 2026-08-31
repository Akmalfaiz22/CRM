const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
   
    datasets: [{
      label: '',
      data: [18, 12, 10, 4],
      backgroundColor: [
      "#6D28D9",
      "#0084FF",
      "#FACC15",
      "#00C853",
       ], 
      borderWidth: 0
    }]
  },
    
});