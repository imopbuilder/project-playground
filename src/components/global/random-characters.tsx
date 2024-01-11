'use client';

import { CHARS, INITIAL_LETTERS } from '@/constants/app';
import { ReactNode, useRef, useState, type MouseEvent } from 'react';

const randomChar = () => CHARS[Math.floor(Math.random() * (CHARS.length - 1))];
const randomString = (length: number) => Array.from(Array(length)).map(randomChar).join('');

export function RandomCharacters({ children }: { children: ReactNode }) {
	const [letters, setLetters] = useState(INITIAL_LETTERS);
	const cardRef = useRef<HTMLDivElement>(null);
	const lettersRef = useRef<HTMLDivElement>(null);

	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		if (!cardRef.current || !lettersRef.current) return;

		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		lettersRef.current.style.setProperty('--x', `${x}px`);
		lettersRef.current.style.setProperty('--y', `${y}px`);

		setLetters(randomString(1500));
	}

	return (
		<div
			ref={cardRef}
			className='group card flex items-center justify-center aspect-square relative m-4 rounded-3xl overflow-hidden cursor-pointer border'
			onMouseMove={handleMouseMove}
		>
			<div className='card-image flex items-center justify-self-center relative z-[4]'>{children}</div>
			<div className='card-gradient h-full w-full absolute pointer-events-none z-[3] mix-blend-darken' />
			<div
				ref={lettersRef}
				className='card-letters absolute left-0 top-0 h-full w-full text-white text-xs font-medium scale-[1.03] opacity-0 transition-opacity duration-[400] group-hover:opacity-100'
			>
				{letters}
			</div>
		</div>
	);
}
