import os
import datetime as dt
import pandas as pd
from flask import Flask, render_template, redirect
import psycopg2
import numpy as np
import json
from flask import Flask, jsonify
from config import password

app = Flask(__name__)

db_name = 'world_happiness_index'

conn = psycopg2.connect(database="world_happiness_index", user = "postgres", password = password, host = "127.0.0.1", port = "5432")

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/World Happiness Report<br/>"
        f"/api/v1.0/Top Five & Bottom Five Map<br/>"
        f"/api/v1.0/year_2015<br/>"
        f"/api/v1.0/year2016<br/>"
        f"/api/v1.0/year2017<br/>"
        f"/api/v1.0/year2018<br/>"
        f"/api/v1.0/year2019<br/>"   
    )

@app.route("/api/v1.0/World Happiness Report")
def index(): 
    return render_template("index.html")

@app.route("/api/v1.0/Top Five & Bottom Five Map")
def map(): 
    return render_template("map.html")

@app.route("/api/v1.0/year2015")
def year2015():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2015;''')

    columns = cur.description 

    results = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]

    year2015 = list(np.ravel(results))

    print(year2015)
    with open("year2015.json", "w") as outfile:
        json.dump(year2015, outfile)
    
    return jsonify(year2015)

@app.route("/api/v1.0/year2016")
def year2016():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2016;''')

    columns = cur.description 

    results = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
    
    year2016 = list(np.ravel(results))

    print(year2016)
    with open("year2016.json", "w") as outfile:
        json.dump(year2016, outfile)

    return jsonify(year2016)

@app.route("/api/v1.0/year2017")
def year2017():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2017;''')

    columns = cur.description 

    results = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]

    year2017 = list(np.ravel(results))

    print(year2017)
    with open("year2017.json", "w") as outfile:
        json.dump(year2017, outfile)

    return jsonify(year2017)

@app.route("/api/v1.0/year2018")
def year2018():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2018;''')

    columns = cur.description 

    results = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
  
    year2018 = list(np.ravel(results))

    print(year2018)
    with open("year2018.json", "w") as outfile:
        json.dump(year2018, outfile)

    return jsonify(year2018)

@app.route("/api/v1.0/year2019")
def year2019():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2019;''')

    columns = cur.description 

    results = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
    
    year2019 = list(np.ravel(results))

    print(year2019)
    with open("year2019.json", "w") as outfile:
        json.dump(year2019, outfile)

    return jsonify(year2019)



if __name__ == '__main__':
    app.run(debug=True)
