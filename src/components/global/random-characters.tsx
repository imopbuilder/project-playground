'use client';

import { CHARS, INITIAL_LETTERS } from '@/constants/app';
import { ReactNode, useRef, useState } from 'react';

const randomChar = () => CHARS[Math.floor(Math.random() * (CHARS.length - 1))];
const randomString = (length: number) => Array.from(Array(length)).map(randomChar).join('');

export function RandomCharacters({ children }: { children: ReactNode }) {
	const [letters, setLetters] = useState(INITIAL_LETTERS);
	const cardRef = useRef<HTMLDivElement>(null);
	const lettersRef = useRef<HTMLDivElement>(null);

	function handlePosition(clientX: number, clientY: number) {
		if (!cardRef.current || !lettersRef.current) return;

		const rect = cardRef.current.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		lettersRef.current.style.setProperty('--x', `${x}px`);
		lettersRef.current.style.setProperty('--y', `${y}px`);

		setLetters(randomString(1500));
	}

	return (
		<div
			ref={cardRef}
			className='group card flex items-center justify-center aspect-square relative rounded-3xl overflow-hidden cursor-pointer border'
			onMouseMove={(e) => handlePosition(e.clientX, e.clientY)}
			onTouchMove={(e) => handlePosition(e.touches[0].clientX, e.touches[0].clientY)}
		>
			<div className='card-image flex items-center justify-self-center relative z-[4]'>{children}</div>
			<div className='card-gradient h-full w-full absolute pointer-events-none z-[3] mix-blend-darken' />
			<div
				ref={lettersRef}
				className='card-letters absolute left-0 top-0 h-full w-full text-white text-xs font-medium scale-[1.03] opacity-0 duration-300 group-hover:opacity-100'
			>
				{letters}
			</div>
		</div>
	);
}
