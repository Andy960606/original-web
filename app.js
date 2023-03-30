import React, { useState } from 'react';
import dotenv from 'dotenv';
import openai from 'openai';
import './App.css';

dotenv.config();

openai.apiKey = process.env.API_KEY;

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerClick = async () => {
    const prompt = `Q: ${question}\nA:`;
    const completions = await openai.completions.create({
      engine: 'davinci',
      prompt: prompt,
      maxTokens: 2048,
      n: 1,
      stop: '\n',
    });
    const { text } = completions.choices[0];
    setAnswer(text.trim());
  };

  return (
    <div className="App">
      <h1>ChatGPT UI Clone</h1>
      <div>
        <label htmlFor="question">Question:</label>
        <input type="text" id="question" value={question} onChange={handleQuestionChange} />
      </div>
      <button onClick={handleAnswerClick}>Get Answer</button>
      {answer && (
        <div>
          <label htmlFor="answer">Answer:</label>
          <textarea id="answer" rows="10" value={answer} readOnly />
        </div>
      )}
    </div>
  );
}

export default App;
