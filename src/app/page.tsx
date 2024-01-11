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
						<h2 className='scroll-m-20 text-2xl font-semibold tracking-tight pb-8'>Tech Stack</h2>
						<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
							<Stack />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</Fragment>
	);
}
