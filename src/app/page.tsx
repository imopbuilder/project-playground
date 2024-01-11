import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import { Stack } from '@/components/pages/home';
import { Fragment } from 'react';

export default function Home() {
	return (
		<Fragment>
			<Header />
			<main>
				<section className='min-h-hvh p-5'>
					<div>
						<p>hello world</p>
						<div className='max-w-80'>
							<Stack />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</Fragment>
	);
}
