var PieChart = function(){
  var container = document.getElementById('pie-chart');
  var chart = new Highcharts.Chart({

    chart:{
      type: 'pie',
      renderTo: container
    },

    title:{
      text: "Pokemon Types I've Caught"
    },

    series:[{
      name: "Pokemon Type",
      data: [
        {
          name: "Fire",
          y: 74,
          color: "tomato",
          sliced: true
        },

        {
          name: "Water",
          y: 25,
          color: "DodgerBlue"
        },

        {
          name: "Grass",
          y: 1,
          color: "Green"
        }]

    }]

  });
}