// // Create a map centered around a specific location
// var myMap = L.map('map').setView([0, 0], 2);

// // Add a tile layer for the map
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);

// d3.json('http://127.0.0.1:5000/driver_data').then(data => {

//     // var driverData = data
//     console.log(data)

//         var driverCountByCountry = {};

//         // Loop through the driver data and create markers
//         data.forEach(driver => {
//             var latitude = driver[6];  // Replace with the actual field name for latitude
//             var longitude = driver[7];  // Replace with the actual field name for longitude
//             var country = driver[5];  // Replace with the actual field name for team

//             if (driverCountByCountry.hasOwnProperty(country)) {
//             driverCountByCountry[country]++;
//             } else {
//             driverCountByCountry[country] = 1;
//             }

//             // Create a marker for each driver
//             L.circle([latitude, longitude],{
//                 fillOpacity: .75,
//                 color: 'black',
//                 fillColor: 'white',
//                 radius: driverCountByCountry[country] *4000
//             }).bindPopup(`<b>${driverCountByCountry[country]} Drivers<br><b>Country:</b> ${country}`)
//               .addTo(myMap);

//         });
// });

// d3.json('http://127.0.0.1:5000/career_wins_data').then(winsData => {

//     // var driverData = data
//     console.log(winsData)

//     // Select top 10 drivers
//     var top10Drivers = winsData.slice(0, 10);
    
//     // Prepare arrays to store x and y data
//     var driverNames = [];
//     var careerWins = [];

//     // Populate the arrays with data
//     for (let i = 0; i < top10Drivers.length; i++) {
//       driverNames.push(top10Drivers[i][3]); // Retrieving 'driver names' from index 3
//       careerWins.push(top10Drivers[i][4]); // Retrieving 'career wins' from index 4
//     }

//     // Prepare bar chart data
//     var barChartData = {
//         type: 'bar',
//         orientation: 'h',
//         x: careerWins.reverse(),
//         y: driverNames.reverse(),
        
     
//     };

//     // Create a bar chart layout
//     var barChartLayout = {
//       title: 'Top 10 Formula 1 Drivers Career Wins',
//       xaxis: { title: 'Career Wins'},
//       height: 400, 
//       width: 700,
//       margin: {
//     l: 150,   // Adjust the left margin to move the chart to the right (in pixels)
//     r: 50,    // Right margin
//     b: 50,    // Bottom margin
//     t: 50,    // Top margin
//     pad: 4    // Padding around the chart
//   }
//     };

//     // Create the bar chart
//     Plotly.newPlot('bar', [barChartData], barChartLayout);
//   });

// Car constructor names
var carNames = ["Ferrari", "McLaren", "Mercedes", "Red Bull", "Williams"];

        function createLineChart(carName) { 
        d3.json('http://127.0.0.1:5000/car_speeds_data').then(carData => {

        // Prepare line chart data
        var selectedData = [];

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
            marker: { color: 'blue' } // Adjust color as desired
        };

        // Create a line chart layout
        var lineChartLayout = {
            title: `<b>${carName} Fastest Lap Speeds (2014-2024)</b>`,
            xaxis: { title: `<b>Year<b>` },
            yaxis: { title: `<b>Fastest Lap Speeds (km/hr)<b>` }
        };

        // Create the line chart
        Plotly.newPlot('lineChart', [lineTrace], lineChartLayout);
        })
    }

    function populateCarSelection() {
    var carSelect = document.getElementById('carSelect');

    carNames.forEach(carName => {
        var option = document.createElement('option');
        option.value = carName;
        option.text = carName;
        carSelect.add(option);
    });

    carSelect.addEventListener('change', function() {
        var selectedCar = carSelect.value;
        if (selectedCar === 'All') {
        } else {
        createLineChart(selectedCar);
        }
    });
    }

    populateCarSelection();