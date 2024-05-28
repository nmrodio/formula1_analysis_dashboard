# formula1_analysis_dashboard
In this project our goal was to create an interactive web application that studies formula one racing data over the last 75 years.
The formula one racing data was provided by Kaggle, which included 6 different data files for analysis: constructors.csv, driver_standings.csv, drivers.csv, results.csv, Nationality.csv and countries.csv.
This data was processed in a variety of ways. One of the first processes was updating the nationality names, so an example was turning East German in German. Additional datasets were also pulled in by using public google csvs to match nationalities, country names and lat-long data. In the processing phase another important component was dropping unused columns. First and last name columns were combined, whereas other columns like urls, codes, dobs and positions were dropped.
Also our group wanted to find career wins and to accomplish this we trimmed results.csv to winners only. Driver wins were counted to create a new file called career_wins.csv. Subsequently we merged nationality/location data to drivers.csv and constructor/lap time data to car_dropdown.csv. Last step in the processing phase was exporting the final 4 csvs.
