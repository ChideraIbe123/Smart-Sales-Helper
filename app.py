from flask import Flask, request, jsonify
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True)