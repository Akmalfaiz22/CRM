const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
   
    datasets: [{
      label: '',
      data: [8, 4, 4, 3, 2, 3],
      backgroundColor: [
      "#6D4AE3",
      "#8B5CF6",
      "#F97316",
      "#5FA56F",
      "#607D7F",
      "#D9A441"
       ], 
      borderWidth: 0
    }]
  },
  
});