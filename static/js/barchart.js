document.addEventListener('DOMContentLoaded', (event) => {
    d3.json('http://127.0.0.1:5000/career_wins_data').then(winsData => {
        console.log(winsData);

        // Sort the data by career wins in descending order
        winsData.sort((a, b) => b[4] - a[4]);

        // Select top 10 drivers
        var top10Drivers = winsData.slice(0, 10);
        
        // Prepare arrays to store x and y data
        var driverNames = [];
        var careerWins = [];

        // Populate the arrays with data
        for (let i = 0; i < top10Drivers.length; i++) {
            driverNames.push(top10Drivers[i][3]); // Retrieving 'driver names' from index 3
            careerWins.push(top10Drivers[i][4]); // Retrieving 'career wins' from index 4
        }

        // Prepare bar chart data
        var ctx = document.getElementById('myBarChart').getContext('2d');
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: driverNames,
                datasets: [{
                    label: 'Career Wins',
                    data: careerWins,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // To display the chart as horizontal
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Career Wins'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Top 10 Formula 1 Drivers Career Wins'
                    }
                }
            }
        });
    }).catch(error => console.error('Error fetching data:', error));
});