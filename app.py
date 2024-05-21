from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine, text, inspect

app = Flask(__name__)
engine=create_engine('postgresql://postgres:postgres@localhost:5432/formula1', echo=True)

# def homepage():
#     """List all available api routes."""
#     return (
#         f"Welcome to the Hawaii Climate App Homepage API!<br/>"
#         f"Available Routes:<br/>"
#         f"/api/v1.0/precipitation<br/>"
#         f"/api/v1.0/stations<br/>"
#         f"/api/v1.0/tobs<br/>"
#         f"/api/v1.0/start<br/>"
#         f"/api/v1.0/start/end<br/>"
#   )




@app.route("/")
def homepage():
    """List all available API routes."""
    available_routes = """
    Available Routes:
    /driver_data
    """ 
    return render_template('index.html', available_routes=available_routes)

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

if __name__ == '__main__':
    app.run(debug=True)