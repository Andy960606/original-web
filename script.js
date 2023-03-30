const openai = new OpenAI(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);

async function getResponse() {
	const userInput = document.getElementById("userInput").value;

	if (userInput.length === 0) {
		alert("Please enter some text!");
		return;
	}

	try {
		const response = await openai.complete({
			engine: 'davinci',
			prompt: userInput,
			maxTokens: 150,
			temperature: 0.5,
			n: 1,
			stream: false,
			stop: '\n'
		});

		document.getElementById("response").innerHTML = response.choices[0].text;
	} catch (err) {
		console.error(err);
		document.getElementById("response").innerHTML = "Error: " + err.message;
	}
}
