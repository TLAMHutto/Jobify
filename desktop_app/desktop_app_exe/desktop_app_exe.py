from flask import Flask, jsonify
from flask_cors import CORS
import os
import subprocess

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

SAVE_DIRECTORY = '../../testData'
FILE_NAME = 'textFromButton.txt'
FILE_CONTENT = "The file is being saved to local machine from profile download button"
APP_DIRECTORY = '../../desktop_app/desktop_app_exe'
APP_FILE = 'desktop_app_exe.py'

def save_file():
    if not os.path.exists(SAVE_DIRECTORY):
        os.makedirs(SAVE_DIRECTORY)
    with open(os.path.join(SAVE_DIRECTORY, FILE_NAME), 'w') as file:
        file.write(FILE_CONTENT)

@app.route('/save_text_file', methods=['POST'])
def save_text_file_endpoint():
    try:
        save_file()
        return jsonify({'status': 'success', 'message': 'File saved successfully!'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/execute_desktop_app', methods=['POST'])
def execute_desktop_app_endpoint():
    try:
        app_path = os.path.join(APP_DIRECTORY, APP_FILE)
        if not os.path.isfile(app_path):
            raise FileNotFoundError(f"The file {app_path} does not exist.")
        subprocess.run(['python', app_path], check=True)
        return jsonify({"status": "success"}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    print("Starting Flask server on http://localhost:5001")
    app.run(host='localhost', port=5001)