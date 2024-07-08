from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from sentiment import transcribe_audio, get_large_audio_transcription_fixed_interval, get_summary

app = Flask(__name__)
CORS(app)

@app.route('/home', methods=['POST'])
def upload_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        desktop_path = '/Users/vamsi/Tik-Tok-Trend-Mapper'
        audio_file_path = os.path.join(desktop_path, 'demo_audio.m4a')
        filename = secure_filename(file.filename)
        file_path = os.path.join('/tmp', filename)
        
        # Save the file to the desired path
        file.save(audio_file_path)
        file.save(file_path)
        
        text = transcribe_and_summarize(file_path)
        return jsonify({'summary': text}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def transcribe_and_summarize(path):
    # Your existing code to transcribe and summarize the audio
    whole_text = get_large_audio_transcription_fixed_interval(path, minutes=1/6)
    summary = get_summary(whole_text)
    return summary

if __name__ == '__main__':
    app.run(debug=True)