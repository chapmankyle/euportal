from flask import Flask, render_template, jsonify
import json
import db

app = Flask("__main__")


@app.route("/api/products")
def get_all_products():
	"""Return list of products."""
	return jsonify(db.get_products())

@app.route("/api/products/<int:id>")
def get_product(id):
	"""Return single of product with id."""
	return jsonify(db.get_product_id(id))

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

@app.route("/api/delete_customer/<session>")
def delete_customer(session):
	""" Deletes a customers account, returns Boolean """
	print("Deleting customer data from db")
	return jsonify(db.delete_customer(session))


@app.route("/api/delete_product/<product_id>")
def delete_product(product_id):
	""" Deletes a product, returns Boolean """
	print("Deleting product data from db")
	return jsonify(db.delete_product(product_id))

if __name__ == "__main__":
	"""Run server in debug mode."""
	app.run(debug=True)
