import OpenAI from "openai";

const openai = new OpenAI();

async function hello(author, text) {
  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a world-renowned author."
      },
      {
        role: "user",
        content: `Write this in the style of ${author}: ${text}`
      }
    ],
    model: "gpt-4o",
    stream: true
  });
  for await (const chunk of stream) {
    process.stdout.write(
      chunk.choices[0].delta.content || ""
    );
  }
}

hello(
  "Mary Oliver",
  "React is a library for building composable user interfaces"
);
