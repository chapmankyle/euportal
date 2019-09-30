from flask import Flask, render_template, jsonify
import json
import db

app = Flask("__main__")


""" Import mockdata """
data = ''
with open('mock_data.json') as f:
  data = json.load(f)

@app.route("/api/products")
def get_all_products():
	"""Return list of products."""
	return jsonify(data)

@app.route("/api/products/<int:id>")
def get_product(id):
	"""Return single of product with id."""
	return jsonify(data["products"][id])

@app.route("/")
def index():
	"""Renders the index page."""
	return render_template("index.html", token="Welcome")

@app.route("/<path:link>")
def other(link):
	"""Renders the Every other page for react."""
	return render_template("index.html", token="Welcome")

@app.route("/api/register_customer/<firstname>;<surname>;<email>;<password>")
def register_customer(firstname, surname, password, email):
	""" Registers a new customer, returns the session ID """
	return db.register_customer(firstname, surname, password, email)

@app.route("/api/register_staff/<name>;<password>;<email>;<_type>")
def register_staff(name, password, email, _type):
	""" Registers a new staff memeber, returns the session ID """
	return db.register_staff(name, password, email, _type)

@app.route("/api/login/<email>;<password>")
def login_user(email, password):
	""" Logs a user in by returning the session ID """
	return db.login_user(email, password)

@app.route("/api/get_customer/<session>")
def get_customer(session):
	""" Registers a new staff memeber, returns the session ID """
	print("getting customer data from db")
	return jsonify(db.get_customer(session))

@app.route("/api/update_customer/<firstname>;<surname>;<email>;<password>;<session>")
def update_customer(firstname, surname, password, email, session):
	""" Registers a new staff memeber, returns the session ID """
	print("getting customer data from db")
	return jsonify(db.update_customer(firstname, surname, password, email, session))

@app.route("/api/add_product/<name>;<description>;<price>;<stock>")
def add_product(name, description, price, stock):
	""" Adds a new product, returns the session ID """
	return db.add_product(name, description, price, stock)

if __name__ == "__main__":
	"""Run server in debug mode."""
	app.run(debug=True)
