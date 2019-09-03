from flask import Flask, render_template, jsonify

app = Flask("__main__")

@app.route("/backend")
def backend():
	"""Backend example."""
	return jsonify({
		"name": "this is a name"
	})


@app.route("/")
def index():
	"""Renders the index page."""
	return render_template("index.html", token="Welcome")


@app.route("/<path:link>")
def other(link):
	"""Renders the Every other page for react."""
	return render_template("index.html", token="Welcome")


if __name__ == "__main__":
	"""Run server in debug mode."""
	app.run(debug=True)
