import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

const OPENAI_KEY = process.env.OPENAI_KEY;

const config = new Configuration({
  apiKey: OPENAI_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
