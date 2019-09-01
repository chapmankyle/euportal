from flask import Flask, render_template

app = Flask("__main__")

@app.route("/")
def index():
	"""Renders the index page."""
	return render_template("index.html", token="Welcome")

@app.route("/products")
def products():
	"""Returns the products page."""
	return render_template("products.html", title="Products")

@app.route("/products/id/<pid>")
def product(pid):
	if isinstance(pid, int):
		productID = int(pid)
		t = "Product " + str(pid)
		return render_template("product.html", title=t, id=productID)

	return render_template("index.html", token="Welcome")

if __name__ == "__main__":
	"""Run server in debug mode."""
	app.run(debug=True)
