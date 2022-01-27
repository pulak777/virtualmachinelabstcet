from flask import Flask, render_template, send_from_directory, request

app = Flask(__name__)


@app.route('/ads.txt')
def ads():
    return send_from_directory(app.static_folder, request.path[1:])


@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

# for 4th sem experiments


@app.route('/Study_of_the_Magnetization_Characteristics_of_a_Separately_Excited_DC_Generator/simulation')
def s4sim1a():
    return render_template('sem4/simulations/exp1a.html')


if __name__ == "__main__":
    app.run(debug=True)
