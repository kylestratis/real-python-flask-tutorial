from flask import Flask

# Flask instance
app = Flask(__name__)

# Route decorator
@app.route("/")
def index():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)