from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/api/solar-data', methods=['GET'])
def get_solar_data():
    df = pd.read_csv('data/data_set.csv')
    data = df.head(100).to_dict(orient='records')  # return first 100 rows
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
 