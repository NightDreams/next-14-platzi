'use client';

import { useChat } from 'ai/react';

export const Chat = (props: { agent: string }) => {
	const { messages, input, handleInputChange, handleSubmit, data } = useChat({
		initialMessages: [
			{
				id: '1',
				role: 'system',
				content: props.agent,
			},
		],
	});

	return (
		<div className="pl-16 mt-4 h-screen w-full  max-w-lg flex flex-col">
			<section className=" space-y-2">
				{/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
				{messages
					.filter(m => m.role !== 'system')
					.map(m => (
						<div key={m.id} className="whitespace-pre-wrap">
							{m.role === 'user' ? 'User: ' : 'AI: '}
							{m.content}
						</div>
					))}
			</section>

			<form onSubmit={handleSubmit} className="flex space-x-4 mt-2">
				<input
					className=" flex text-black w-full max-w-md p-2 mb-8 border-2 border-gray-300 rounded shadow-xl"
					value={input}
					placeholder="Say something..."
					onChange={handleInputChange}
				/>
				<button
					className="border-solid p-2 h-fit border-2 border-white  rounded-md"
					type="submit"
				>
					Send
				</button>
			</form>
		</div>
	);
};
