window.onload = function(){

  var url = "https://restcountries.eu/rest/v1/all";
  var select = document.getElementById('country-select');
  

  makeRequest(url, requestComplete);

  new PieChart();
  // new ColumnChart("line", "Favourite Cities", "random", [12,3,2,20], ["Edinburgh", "London", "Glasgow", "Tokyo"]);


}

  var makeRequest = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
    console.log("makeRequest");
  };

  var requestComplete = function() {
    console.log("got the data");
    if (this.status !== 200) return;
    
    var jsonString = this.responseText;
    var countries = JSON.parse(jsonString);
    
    var names = countryName(countries)
    
    var populations = population(countries)
    
    var colChart = new ColumnChart("line","countries" , '', populations , names  );

  }

  var population = function(countries){
    var populations = []
    for (country of countries){
      if (country.region === 'Europe'){
      populations.push(country.population)
      }
    }
    console.log('populations', populations)
    return populations;
  }

  var countryName = function(countries){
    var names = []
    for (country of countries){
      if (country.region === 'Europe'){
      names.push(country.alpha2Code)
    }
  }
    console.log("names", names)
    return names;
  }
  


  
  




