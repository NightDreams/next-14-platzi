import { google } from '@ai-sdk/google';
import { StreamingTextResponse, streamText, StreamData } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
	const { messages } = await req.json();

	const result = await streamText({
		model: google('models/gemini-1.5-flash-latest'),
		messages,
	});

	const data = new StreamData();

	data.append({ test: 'value' });

	const stream = result.toAIStream({
		onFinal(_) {
			data.close();
		},
	});

	return new StreamingTextResponse(stream, {}, data);
}
