const apiKey = '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'; // Replace with your OpenAI API key
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

function generate() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'Bearer ' + apiKey);
  const body = {
    prompt: input,
    max_tokens: 60,
    temperature: 0.7,
    n: 1,
    stop: '\n'
  };
  fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(data => {
    const result = data.choices[0].text.trim();
    output.value = result;
  })
  .catch(error => console.error(error));
}
