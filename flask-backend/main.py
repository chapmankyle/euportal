import flask

app = flask.Flask("__main__")

@app.route("/")
def index():
    return flask.render_template("index.html", token="Welcome")

app.run(debug=True)