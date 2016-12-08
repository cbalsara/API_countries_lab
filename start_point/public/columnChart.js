// var ColumnChart = function(){
//   var container = document.getElementById('column-chart');
//   var chart = new Highcharts.Chart({

  //   chart: {
  //     type: 'column',
  //     renderTo: container
  //   },

  //   title: {
  //     text: "Our Favourite Programming Languages"
  //   },

  //   series: [{
  //     name: "Cohort 7",
  //     data: [6, 8, 14, 1]
  //   }],

  //   xAxis: {
  //     categories: ['JavaScript', 'Java', 'Ruby', 'C++']
  //   }

  // })
// });

var ColumnChart = function(type, text, name, data, categories){
  var container = document.getElementById('column-chart');
  var chart = new Highcharts.Chart({
    chart: {
          type: type,
          renderTo: container
        },

        title: {
          text: text
        },

        series: [{
          name: name,
          data: data
        }],

        xAxis: {
          categories: categories
        }
      });
}















