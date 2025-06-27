const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const { userInput, resume } = JSON.parse(event.body);

    const prompt = `You are a helpful assistant answering questions about Villy's resume. Her resume: ${resume}. Question: ${userInput}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    const content = data.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: content }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong." }),
    };
  }
};
