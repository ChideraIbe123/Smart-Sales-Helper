from flask import Flask, request, jsonify
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
import os
import subprocess

app = Flask(__name__)
CORS(app)
# Load your model and tokenizer
tokenizer = AutoTokenizer.from_pretrained('path_to_your_model')
model = AutoModelForSeq2SeqLM.from_pretrained('path_to_your_model')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    inputs = tokenizer.encode(data['summary'], return_tensors="pt")
    outputs = model.generate(inputs)
    prediction = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return jsonify({'recommendation': prediction})

@app.route('/upload-audio', methods=['POST'])
def upload_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    filename = file.filename

    if filename == '':
        return jsonify({'error': 'No file selected'}), 400

    filepath = os.path.join('/tmp', filename)
    file.save(filepath)

    # Assuming your script is named 'summarizer.py' and expects a file path
    result = subprocess.run(['python', 'summarizer.py', filepath], capture_output=True, text=True)
    
    if result.returncode != 0:
        return jsonify({'error': 'Error processing file', 'message': result.stderr}), 500
    
    return jsonify({'summary': result.stdout})

if __name__ == "__main__":
    app.run(debug=True, port=5000)