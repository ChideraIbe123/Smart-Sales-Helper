

# Tik Tok Trend Mapper

# Problem Statement

Customer service representatives often struggle to provide personalized and relevant product recommendations during conversations with customers. This can lead to dissatisfaction and a less engaging customer experience. Our product addresses this challenge by taking in the conversation between the representative and the customer, analyzing it, and providing tailored product recommendations at the click of a button. This ensures that the recommendations are directly relevant to the customer's needs and preferences, improving customer satisfaction and enhancing the overall shopping experience.


# Project Description
Our project is designed to enhance customer interactions by providing personalized product recommendations based on real-time conversations. By leveraging advanced audio transcription, text processing, and sentiment analysis, our tool ensures that customer service representatives can offer relevant and timely product suggestions, improving customer satisfaction and engagement.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
npx create-react-app productcartdemo

# Development Tools:
  ## Visual Studio Code
  ##  Git and GitHub for version control
  ## Node.js and npm for package management
  ##  Webpack for module bundling

# APIs Used:
  ## BART for summarization of conversation  - DummyJSON RestAPI for product data

# Assets Used:
  ## Audio files in mp3 format
  ## Product images and descriptions from DummyJSON API

# Libraries Used:
  ## React: For building the front end.
  ## Speech Recognition & pydub: Converting the speech to text
  ## Bart: For summarizing the transcript of the audio file
  ## FuzzyWuzzy: For matching conversation words with product titles and descriptions.
  ## Llama3: A fine-tuned model for refining product suggestions.
  ## Sentiment Analysis Model: For analyzing the sentiment of the conversation.


<br/>

## Features:
### Audio Recording and Transcription: 
   #### Feature: Records audio and converts it into an mp3 format.
   #### Functionality: Utilizes a transcription service to convert audio to text.
   
### Conversation Summarization: 
   #### Feature: Summarizes the transcribed conversation.
   #### Functionality: Condenses lengthy conversations into a brief summary for quick understanding.
   
### Text Processing:
   #### Feature: Processes the conversation text to remove frequently used words.
### Product Suggestion:
   #### Feature: Provides product suggestions based on the conversation.
   #### Functionality: Uses the FuzzyWuzzy library to match words from the conversation with product titles and descriptions from a dummy product database. Picks out twenty suggestions and refines them to 3-5 using a fine-tuned Llama3 model.

- #### User Interface
  - #### Display List of products from dummy API: https://dummyjson.com/docs.
  - #### Add to Database for user
  - #### Remove from Database for user
  - #### Cancel Choice
  - #### Search by Category
  - #### Generate Suggestions
  - #### Display of Sentiment of the User
  - #### Purchase History of User
  - #### Login for User


<br/>


## Available Scripts

## Install JDK 17

## Install mySQL

## "brew install gradle"
Installs gradle for environment use

## To build "$ gradle build"
Builds the environment for the app to be hosted on

To run the application gradle run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`


