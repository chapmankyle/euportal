from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('template.html')

@app.route('/products')
def products():
    """Renders the products page."""
    return render_template('products.html')

@app.route('/hello')
def hello():
    return render_template('hello.html')


@app.route('/profile')
def hello():
    return render_template('profile.html')


if __name__ == '__main__':
    app.run(debug=True)
