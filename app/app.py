from flask import Flask, render_template, request, jsonify
import requests

# Flask instance
app = Flask(__name__)

# Route decorator
@app.route("/hello")
def hello():
    return "Hello, World!"

# Must specifically add POST
# @app.route("/", methods=['GET', 'POST'])
# def home():
#     # Checking flask request object for request type
#     if request.method == 'POST':
#         value_one = int(request.form.get('first'))
#         value_two = int(request.form.get('second'))
#         total = value_one + value_two
#         data = {"total": str(total)}
#         return jsonify(data)
#     # GET request
#     return render_template('index.html', string="TESTING!")

@app.route("/", methods=['GET', 'POST'])
def home():
    # Checking flask request object for request type
    if request.method == 'POST':
        # user input
        value_one = request.form.get('first')
        value_two = request.form.get('second')
        # api call
        url = 'https://api.github.com/search/users?q=location:{0}+language:{1}'.format(value_one, value_two)
        try:
            response_dict = requests.get(url).json()
            return jsonify(response_dict)
        except:
            return jsonify({"error", "error message"}), 500
    # GET request
    return render_template('index.html', string="TESTING!")


if __name__ == '__main__':
    app.run(debug=True)