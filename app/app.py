from flask import Flask, render_template, request, jsonify

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
        value_one = int(request.form.get('first'))
        value_two = int(request.form.get('second'))
        total = value_one + value_two
        data = {"total": str(total)}
        return jsonify(data)
    # GET request
    return render_template('index.html', string="TESTING!")

if __name__ == '__main__':
    app.run(debug=True)