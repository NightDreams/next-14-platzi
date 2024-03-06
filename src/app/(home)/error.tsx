'use client';
import { useEffect } from 'react';

interface ErrorProps {
	error: Error;
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.log('🚀 /(home) ~ Error:', error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center min-h-[100vh]">
			<h1 className="text-[4rem] text-[#721c24] ">:c</h1>
			<p className="text-2xl text-[#721c24]">Ha ocurrido un error</p>
			<button
				type="button"
				className="py-2 px-4 text-base text-white bg-[#d9534f]  border border-solid border-[#d9534f]
				rounded cursor-pointer mt-4
				"
				onClick={reset}
			>
				Intentar de nuevo
			</button>
		</div>
	);
}
