// Car constructor names from API end point data
var carNames = ["Ferrari", "McLaren", "Mercedes", "Red Bull", "Williams"];
// Function to pull in data from API end point
function createLineChart(carName) {
  d3.json('http://127.0.0.1:5000/car_speeds_data')
    .then(carData => {
      console.log(carData);
      // Array to hold line chart data
      var selectedData = [];
      // Retreiving the necessary data from the API end point and saving the data into variables for the line chart
      carData.forEach(dataPoint => {
        var year = dataPoint[0];
        var constructor = dataPoint[1];
        var points = dataPoint[2];
        if (constructor === carName) {
          selectedData.push({ x: year, y: points });
        }
      });
      // Create line chart trace (single car)
      var lineTrace = {
        x: selectedData.map(point => point.x),
        y: selectedData.map(point => point.y),
        name: carName,
        mode: 'lines',
        marker: { color: 'red' } // Adjust color as desired
      };
      // Creating a line chart layout
      var lineChartLayout = {
        title: `<b>${carName} Fastest Lap Speeds (2014-2024)</b>`,
        xaxis: { title: '<b>Year</b>' },
        yaxis: { title: '<b>Fastest Lap Speeds (km/hr)</b>' }
      };
      // Creating the line chart
      Plotly.newPlot('lineChart', [lineTrace], lineChartLayout);
    })
    .catch(error => console.error('Error fetching data:', error));
}
function populateCarSelection() {
  var carSelect = document.getElementById('carSelect');;
  // Dynamically creating an 'option' element for the dropdown menu
  carNames.forEach(carName => {
    var option = document.createElement('option');
    option.value = carName;
    option.text = carName;
    carSelect.add(option);
  });
  // Calling createLineChart to have "Ferrari" data as the default
  createLineChart("Ferrari");
  // Changes line chart to display data of selected car
  carSelect.addEventListener('change', function() {
    var selectedCar = carSelect.value;
    if (selectedCar === 'All') {
      fetchAllCarData()
        .then(carData => plotAllCars(carData))
        .catch(error => console.error('Error fetching data:', error));
    } else {
      createLineChart(selectedCar);
    }
  });
}
populateCarSelection();