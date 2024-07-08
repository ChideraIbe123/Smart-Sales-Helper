import speech_recognition as sr 
import os 
from pydub import AudioSegment
from pydub.silence import split_on_silence
from transformers import AutoTokenizer, BartForConditionalGeneration

# create a speech recognition object
r = sr.Recognizer()


def transcribe_audio(path):
    # use the audio file as the audio source
    with sr.AudioFile(path) as source:
        audio_listened = r.record(source)
        # try converting it to text
        text = r.recognize_google(audio_listened)
    return text


def get_large_audio_transcription_fixed_interval(path, minutes=5):
    """Splitting the large audio file into fixed interval chunks
    and apply speech recognition on each of these chunks"""
    # open the audio file using pydub
    sound = AudioSegment.from_file(path, format='m4a')
    file_handle = sound.export("/Users/vamsi/Tik-Tok-Trend-Mapper/output.wav", format='wav')
    # sound = AudioSegment.from_mp3(path)
    # sound.export("/Users/maanavagrawal/Documents/Tik-Tok-Trend-Mapper/output.wav", format="wav")
    # split the audio file into chunks
    chunk_length_ms = int(1000 * 60 * minutes) # convert to milliseconds
    chunks = [sound[i:i + chunk_length_ms] for i in range(0, len(sound), chunk_length_ms)]
    folder_name = "audio-fixed-chunks"
    # create a directory to store the audio chunks
    if not os.path.isdir(folder_name):
        os.mkdir(folder_name)
    whole_text = ""
    # process each chunk 
    for i, audio_chunk in enumerate(chunks, start=1):
        # export audio chunk and save it in
        # the `folder_name` directory.
        chunk_filename = os.path.join(folder_name, f"chunk{i}.wav")
        audio_chunk.export(chunk_filename, format="wav")
        # recognize the chunk
        try:
            text = transcribe_audio(chunk_filename)
        except sr.UnknownValueError as e:
            print("Error:", str(e))
        else:
            text = f"{text.capitalize()}. "
            whole_text += text
    # return the text for all chunks detected
    return whole_text
def get_summary(text):
    model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
    tokenizer = AutoTokenizer.from_pretrained("facebook/bart-large-cnn")

    inputs = tokenizer([text], max_length=1024, return_tensors="pt")

    # Generate Summary
    summary_ids = model.generate(inputs["input_ids"], num_beams=4, min_length=0, max_length=40)
    summary = tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]
    return summary

path = "/Users/vamsi/Tik-Tok-Trend-Mapper/demo_audio.m4a"
whole_text = get_large_audio_transcription_fixed_interval(path, minutes=1/6)
print("\nFull text:", get_large_audio_transcription_fixed_interval(path, minutes=1/6))
print("\nSummary:", get_summary(whole_text))
