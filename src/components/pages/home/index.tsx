import { RandomCharacters } from '@/components/global/random-characters';
import Image from 'next/image';

export function Stack() {
	return <StackCard image='/stack/shadcn-ui.png' />;
}

function StackCard({ image }: { image: string }) {
	return (
		<div>
			<RandomCharacters>
				<Image src={image} width={100} height={100} alt={'stack'} />
			</RandomCharacters>
		</div>
	);
}
