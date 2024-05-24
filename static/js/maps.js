// Create a map centered around a specific location
var myMap = L.map('map').setView([0, 0], 2);

// Add a tile layer for the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

d3.json('http://127.0.0.1:5000/driver_data').then(data => {
    var driverCountByCountry = {};

    // Loop through the driver data and create markers
    data.forEach(driver => {
        var latitude = driver[6];  // Replace with the actual field name for latitude
        var longitude = driver[7];  // Replace with the actual field name for longitude
        var country = driver[5];  // Replace with the actual field name for country

        if (driverCountByCountry.hasOwnProperty(country)) {
            driverCountByCountry[country]++;
        } else {
            driverCountByCountry[country] = 1;
        }
    });

    // Define a color scale based on the number of drivers (domain: 1 to 166)
    var colorScale = d3.scaleLinear()
        .domain([1, 166])
        .range(["green", "yellow"]);  // Change the range of colors from black to white

    // Add markers to the map with dynamically determined fill color
    data.forEach(driver => {
        var latitude = driver[6];  // Replace with the actual field name for latitude
        var longitude = driver[7];  // Replace with the actual field name for longitude
        var country = driver[5];  // Replace with the actual field name for country

        var fillColor = colorScale(driverCountByCountry[country]);

        L.circle([latitude, longitude], {
            fillOpacity: .25,
            color: 'black',
            weight: 0.5,
            opacity: 0.25,
            fillColor: fillColor,
            radius: driverCountByCountry[country] * 4000
        }).bindPopup(`<b>${driverCountByCountry[country]} Drivers<br><b>Country:</b> ${country}`)
          .addTo(myMap);
    });

        // Create a legend
        var legend = L.control({ position: 'bottomright' });
        legend.onAdd = function () {
            var div = L.DomUtil.create('div', 'info legend');
            div.style.backgroundColor = 'white';
            div.style.padding = '15px';
            div.innerHTML = '<h3>Number of Drivers</h3>' +
                '<i class="square" style="background: green;"></i>Lowest<br>' +
                '<i class="square" style="background: yellow;"></i>Highest<br>';

            // Style for the colored squares
            var style = document.createElement('style');
            style.innerHTML = '.square { display: inline-block; width: 10px; height: 10px; margin-right: 5px; }';
            div.appendChild(style);
        
            return div;
        };
        legend.addTo(myMap);
    });


// Function to interpolate colors along a gradient
function interpolateColors(color1, color2, steps) {
    var color1RGB = d3.rgb(color1);
    var color2RGB = d3.rgb(color2);
    var interpolator = d3.interpolateRgb(color1RGB, color2RGB);

    var colors = [];
    for (var i = 0; i < steps; i++) {
        colors.push(interpolator(i / (steps - 1)).toString());
    }
    return colors;
}