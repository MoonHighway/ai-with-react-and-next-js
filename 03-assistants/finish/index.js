import OpenAI from "openai";
import readline from "readline";

const openai = new OpenAI();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "Share your opening paragraph with the speaker coach!  \n",
  async (question) => {
    const run = await openai.beta.threads.createAndRun({
      assistant_id: "asst_eSU1l5ElnZwcDrd5grYrKsYM",
      thread: {
        messages: [
          {
            role: "user",
            content: question
          }
        ]
      }
    });
    async function checkStatus() {
      let status = await openai.beta.threads.runs.retrieve(
        run.thread_id,
        run.id
      );
      if (status.status === "completed") {
        let messages =
          await openai.beta.threads.messages.list(
            run.thread_id
          );
        messages.data.forEach((msg) => {
          const content = msg.content[0].text.value;
          console.log(content);
        });
      } else {
        console.log("Run is not completed yet.");
      }
    }
    setTimeout(() => {
      checkStatus(run.thread_id, run.id);
    }, 20000);
  }
);
