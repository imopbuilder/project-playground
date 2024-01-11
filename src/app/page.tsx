import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import { Fragment } from 'react';

export default function Home() {
	return (
		<Fragment>
			<Header />
			<main>
				<div>
					<p>hello world</p>
				</div>
			</main>
			<Footer />
		</Fragment>
	);
}
