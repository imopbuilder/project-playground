import { RandomCharacters } from '@/components/global/random-characters';
import { STACK } from '@/constants/app';
import Image from 'next/image';
import { Fragment } from 'react';

export function Stack() {
	return (
		<Fragment>
			{STACK.map((stack) => (
				<StackCard key={stack.id} image={stack.image.src} />
			))}
		</Fragment>
	);
}

function StackCard({ image }: { image: string }) {
	return (
		<div>
			<div className='w-full relative'>
				<RandomCharacters>
					<Image src={image} className='w-16 md:w-24' width={100} height={100} alt={'stack'} />
				</RandomCharacters>
			</div>
		</div>
	);
}
