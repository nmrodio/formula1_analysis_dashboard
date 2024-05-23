from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine, text, inspect

app = Flask(__name__)
engine=create_engine('postgresql://postgres:postgres@localhost:5432/formula1', echo=True)


# Setting up homepage that displays the API routes
@app.route("/")
def homepage():
    """List all available API routes."""
    available_routes =  [
    ("drivers", "/driver_data"),
    ("cars", "/car_data"),
    ("career_wins", "/career_wins_data"),
    ("car_speeds", "/car_speeds_data")
    ]

    return render_template('index.html', available_routes=available_routes)

# Setting up the F1 driver data API route 
@app.route('/driver_data')
def get_driver_data(): 
    query=text('''
               SELECT * 
               FROM drivers
               ''')
    conn=engine.connect()
    results=conn.execute(query)
    conn.close()
    results=[tuple(row[1:]) for row in results]
    return jsonify(results)

# Setting up the car API route 
@app.route('/car_data')
def get_car_data(): 
    query=text('''
               SELECT * 
               FROM cars
               ''')
    conn=engine.connect()
    results=conn.execute(query)
    conn.close()
    results=[tuple(row[1:]) for row in results]
    return jsonify(results)

# Setting up the F1 drivers career wins API route 
@app.route('/career_wins_data')
def get_career_wins_data(): 
    query=text('''
               SELECT * 
               FROM career_wins
               ''')
    conn=engine.connect()
    results=conn.execute(query)
    conn.close()
    results=[tuple(row[1:]) for row in results]
    return jsonify(results)

# Setting up the cars fastest lap time over the years 2014-2024 data API route 
@app.route('/car_speeds_data')
def get_car_speeds_data(): 
    query=text('''
               SELECT * 
               FROM car_speeds
               ORDER BY make ASC, year ASC
               ''')
    conn=engine.connect()
    results=conn.execute(query)
    conn.close()
    results=[tuple(row[1:]) for row in results]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)