import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30; // 30 seconds

export async function POST(req) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    prompt: `Write a one paragraph recommendation about things to do in ${prompt}`
  });
  return result.toAIStreamResponse();
}
