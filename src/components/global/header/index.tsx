import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';

export default function Header() {
	return (
		<header className='border-b'>
			<div className='mx-5 h-16 flex items-center justify-between'>
				<div>
					<Link href={'/'} className='font-semibold text-sm sm:text-base'>
						Imopbuilder Playground
					</Link>
				</div>
				<nav>
					<ThemeToggle />
				</nav>
			</div>
		</header>
	);
}
