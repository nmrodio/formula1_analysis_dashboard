# **formula1_analysis_dashboard** #
--------------

## **Project Goal:** ##
This project aims to create an interactive dashboard for exploring Formula 1 Racing data spanning the last 75 years. It leverages a Flask backend to handle data extraction, transformation, storage, and visualization. The backend serves pre-processed JSON data tailored for three visualizations implemented using separate JavaScript libraries.

**Visualizations:**
* Interactive Map
* Interactive Line Chart
* Bar Chart

---------------------------

## **Key Features:** ##
**Data Preprocessing:**
* Data is extracted from five CSV files downloaded from Kaggle and two CSV files from Google.
* Python scripts process and transform the data into a format suitable for creation of visualizations.
* Four new CSV files are created containing the transformed data for each visualization.
  
**Data Storage:**
* A db.py script utilizes SQLAlchemy's `.to_sql` function to populate four tables in a PostgreSQL database called "formula1".
* The four processed CSV files are used to populate the respective tables.

### *drivers* table ###

![Screenshot 2024-05-20 232610](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/5d5f6fb8-4223-43aa-8dd0-fe2b89ec826a)

### *cars* table ###

![Screenshot 2024-05-20 232714](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/b2e82eee-0263-4f7e-a2cb-296467998a22)

### *career_wins* table ###

![Screenshot 2024-05-20 232731](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/3c9de0c0-cd94-4602-a088-e8e3e69fb39c)

### *car_speeds* table ###

![Screenshot 2024-05-20 232745](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/01c8464c-0e2e-400a-a62e-28375ca0cd88)


**Data Visualization Dashboard:**
* A Flask backend (app.py) serves as the foundation for the web application.
  
The backend offers four routes:
* One route serves as the home page and the other four routes reference the JSON-Formatted data from the four tables in the formula1 database.
  
Three additional routes serve pre-processed JSON data tailored for the three visualizations:

**1. Interactive Map:** (Shows the count of drivers over the last 75 years per country)

**2. Interactive Line Chart:** (Shows the fastest average lap speed per manufacturer from 2014-2024 for the top five most used cars)

**3. Bar Chart:** (Shows the top 10 most sucessful drivers based on their career wins) 

* The render_template function is used to render HTML templates that reference separate JavaScript files (".js").
* These JavaScript files contain the code responsible for creating the three interactive visualizations using libraries like Plotly or Leaflet.

---------------------------

## **How to start up and use the interactive dashboard:** ##
1. Download all the files from the repository into your local files
2. Execute the file called app.py in terminal by running `python app.py` (make sure that you are in the correct directory when executing) or inside VS Code, you can click "Run" in the top left tool bar and then select "Run without debugging" and it will create a clickable link (http://127.0.0.1:5000) that takes you to the interactive dashboard homepage

![Screenshot 2024-05-28 154512](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/9546f12a-35f3-4521-a5b5-a52771cdd381)

3. Once on the hompage there are a total of seven routes:
   * The first four routes show the JSON-Formatted data that are being used to create the visualizations
   * The last three routes take you to each of the three visualizations which have intuitive labeling

![Screenshot 2024-05-28 154110](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/8c54fe08-4f28-4c4e-9fa4-b3a9e8c6792e)

4. The map has popups that can be clicked on to show the driver count of each country and the country name

![Screenshot 2024-05-28 154151](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/0a74b7b4-78b9-480f-abe8-a4b4b29d2488)

5. The barchart shows the top 10 drivers by career wins and if you hover over the bars you can see their exact win counts

![Screenshot 2024-05-28 154306](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/74320a0d-3b4f-413c-9aca-20ad65300468)

6. The linechart is the most interactive and has a dropdown menu that allows you change between manufacturers to see their fastest average lap speeds over the last 10 years

![Screenshot 2024-05-28 154339](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/bcc58933-4a78-462e-95cc-713ce4ce4f73)

![Screenshot 2024-05-28 154323](https://github.com/nmrodio/formula1_analysis_dashboard/assets/157527614/f844bd17-63e5-425c-b4d8-9f026ad87baa)

---------------------------

## Ethical Consideration: ##
This Formula 1 data exploration project prioritizes responsible data handling practices. The source of the data (Kaggle) should be acknowledged and properly attributed. Data privacy is also a consideration, ensuring any driver or team information adheres to relevant regulations. When presenting findings or visualizations, transparency is key.  Clear methodologies and data limitations should be communicated to avoid misinterpretations. Finally, the project strives to promote inclusivity within Formula 1 by showcasing the sport's rich history and data-driven insights accessible to all racing enthusiasts.

## Data Sources ##
* Kaggle - Five CSV files regarding Formula 1 Racing Data: https://www.kaggle.com/datasets/jtrotman/formula-1-race-data?select=races.csv
* Google - Generic Country Data: https://developers.google.com/public-data/docs/canonical/countries_csv
* Google - Generic Nationality Data: 

---------------------------

## Code References ##
* Bootcamp challenges
* For syntax that the group was not familiar with such as the animation.html code, we used resources such as the Xpert Learning Assistant, provided by UC Berkely Bootcamp, JavaScript Documentation, StackOverflow, and ChatGPT.



   
