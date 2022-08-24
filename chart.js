//   const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//   ];

  const data = {
    datasets: [{
      label: 'My First dataset',
      backgroundColor: ['#018FFF', '#FAD679', '#F5FBFE'],
      borderColor: 'none',
      data: [25, 15, 10],
    }]
};
const opt = {        
  cutoutPercentage: 1
};
  

  const config = {
    type: 'doughnut',
    data: data,
    options: opt
  };


//   2


// const labels = Utils.months({count: 7});
// const data2 = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };

// const configs = {
//     type: 'line',
//     data: data2,
//   };


// var xValues = [];
// var yValues = [];
// generateData("Math.sin(x)", 0, 10, 0.5);

// new Chart("myChart", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{
//       fill: false,
//       pointRadius: 2,
//       borderColor: "rgba(0,0,255,0.5)",
//       data: yValues
//     }]
//   },    
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "y = x * 2 + 7",
//       fontSize: 16
//     }
//   }
// });
// function generateData(value, i1, i2, step = 1) {
//   for (let x = i1; x <= i2; x += step) {
//     yValues.push(eval(value));
//     xValues.push(x);
//   }
// }



