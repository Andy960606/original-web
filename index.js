const apiKey = process.env.API_KEY;

// Define a function to handle the form submission
async function handleSubmit(event) {
	event.preventDefault();

	// Get the user input from the form
	const userInput = document.getElementById("userInput").value;

	// Send a request to the OpenAI API
	const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
		},
		body: JSON.stringify({
			prompt: userInput,
			max_tokens: 2048,
			n: 1,
			stop: ["\n"]
		})
	});

	// Get the response from the API
	const data = await response.json();

	// Display the response on the page
	const outputElement = document.getElementById("output");
	outputElement.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
	outputElement.innerHTML += `<p><strong>AI:</strong> ${data.choices[0].text}</p>`;
}

// Add an event listener to the form
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
