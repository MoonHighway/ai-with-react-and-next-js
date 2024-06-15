import OpenAI from "openai";

const openai = new OpenAI();

// Create a prompt that generates questions for a job interview
// Ask for 3 interview questions for a React developer
// Extra Credit: Make this a template to make this dynamic for any kind of dev

async function jobInterview(language) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You will be asked to create job interview questions."
      },
      {
        role: "user",
        content: `Give me 3 interview questions for a ${language} developer.`
      }
    ],
    model: "gpt-4o"
  });
  console.log(completion.choices[0].message.content);
}

jobInterview("Rust");
