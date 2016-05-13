from flask import Flask, render_template, request

# Flask instance
app = Flask(__name__)

# Route decorator
@app.route("/hello")
def hello():
    return "Hello, World!"

# Must specifically add POST
@app.route("/", methods=['GET', 'POST'])
def home():
    # Checking flast request object for request type
    if request.method == 'POST':
        value_one = int(request.form['number-one'])
        value_two = int(request.form['number-two'])
        total = value_one + value_two
        return render_template('index.html', value=total)
    # GET request
    return render_template('index.html', string="TESTING!")

if __name__ == '__main__':
    app.run(debug=True)