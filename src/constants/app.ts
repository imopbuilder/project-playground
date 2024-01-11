export const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const INITIAL_LETTERS =
	'0D8vUOBlazkAyp7doObOMvQhUud3adsv2jbVVdqJqS5EgonmgPHDJ1FXVPI7ZLdcuVvXkUvpFHQW0WHWGVg3Dvw2AhIE7T2GBEe3RaeO4vvefDIr0oseEPlhNNmNvBajXlicwaXu0slpsd3phgesdbHVsnsStDdR4SuPpcVRQLlENmQ1bqWCaTTSrVX7PeTl2MhDIs0JqC2CrAjZpoF1Y3P84jIJw1OnprCCBITDxtsNWeFvGOMwjuknkBT64vEQG2SOcmsfv86GFi0ubLikL4tE38ymGPyH5dCdBGDLF0uVz3ORcqUEfgelRhV6qWujBiR6BkQUSqlT8iAHK01aDMySbvvQKcIHl5xckGDi0VH6z4xwKwCHNW2xWvVNmHQR3qiJTnVl2o2EEq5FQVP6zMyTwReOVA6VuFSz51bUpBMBUg0ihKafLisBS7dyM58kcYBrsCaKVdcWezsI7AprBFDWe8zcEQ4uhLF3glGGDfoH0d5CdNZQWuai3wGPbKtibar3g71aBpjVD6HXN1tF6x3Nv2ntWFVNKsawfQxQlLLhpTFrnn7qatMiC266s76DFpNzsrmAOxc0BUjWCPGdsMz5SM3aOo8pUs1xlVjrgqJiy4hf2v513hYuZTW8jc1ONRNLYGYkZkDykpzPswdnikgUSe1iMNR8YptaViAiVBJpvRBwl1WeO7SmfVMgNRS2OENZJb5NP0wIBecalQCHgm8q7VDL2lLcOkMPButF5JvYO0cImKlbQ5rdAFDYBz6nZKU3JAqCZG7PCFCBwYXCU1HYW8BNxxKrnC4FsSRB3lVI3XghjHAYhEuuFKOCZBZzlCftUQga66kDBpTFJbMpCRrpsEsdsTQj2GO00ZNooxzwtcOdLBsdNklMdBnrCuRhwX2KEkegyT6Rw4gutIKhMUsSrIvwvesoJgccJIADS7jlrHaqaM4xCViXKJDD5A4xCL5GxoVDpPtYqFuk25Q6Phyh0teff2LUsL8BEECIRHGn4TDDFcKK2EIBxLXQXFqp8J734R8Gzh84pgKxmtul4klPJjdXo18S4GtCatmLhHImbumzm12NiDOVZ6sSq4n0nX2N7CdyuxewgOf1YBTSl5bLXZbJgx7hg4XRawTrGtuS0XMTKOWImBzTdDi1D1gcqkQziq11NfT0Ri4NKqCriJyvPsIZGvBGeZgS5X7XlEUQffOHBHsxpziOTOdrYOiEDOU4zD2EYBgMUoFnZx8qe6czqMDVpSrktov5EALY0BfcNpJISaWaD5PuGVyqrtyvWDP62CL7qlqEmiJp2CPYizUVbDdjTSd8HLrml7FeHuuQLsjrsRJcAMeHipnGOFu3Xpbd1cYaCM2ICU67bgsb5F0l7AdEqSyZpJbp3OzF0QTh44KYxfaBqu1IECNR4fYU8PeIVqzyNUQdGGi6axszlcbkB33ubvUqwVfFdIK4QJf4CrnVXYFHZBiEUwt6tpAokwalTBXs5jx3K3B4YyDhMsBwY0Qn';

type TStck = {
	id: string;
	image: {
		src: string;
		alt: string;
	};
	label: string;
};

export const STACK: TStck[] = [
	{
		id: 's1',
		image: {
			src: '/stack/html.svg',
			alt: 'html',
		},
		label: 'HTML',
	},
	{
		id: 's2',
		image: {
			src: '/stack/css.svg',
			alt: 'css',
		},
		label: 'CSS',
	},
	{
		id: 's3',
		image: {
			src: '/stack/js.svg',
			alt: 'js',
		},
		label: 'Javascript',
	},
	{
		id: 's4',
		image: {
			src: '/stack/react.svg',
			alt: 'reactjs',
		},
		label: 'Reactjs',
	},
	{
		id: 's5',
		image: {
			src: '/stack/sass.svg',
			alt: 'sass',
		},
		label: 'Sass',
	},
	{
		id: 's6',
		image: {
			src: '/stack/tailwindcss.svg',
			alt: 'tailwindcss',
		},
		label: 'Tailwindcss',
	},
	{
		id: 's7',
		image: {
			src: '/stack/nextjs.svg',
			alt: 'nextjs',
		},
		label: 'Next.js',
	},
	{
		id: 's8',
		image: {
			src: '/stack/shadcn-ui.svg',
			alt: 'shadcn-ui',
		},
		label: 'Shadcn Ui',
	},
	{
		id: 's9',
		image: {
			src: '/stack/redux-toolkit.svg',
			alt: 'redux-toolkit',
		},
		label: 'Redux toolkit',
	},
	{
		id: 's10',
		image: {
			src: '/stack/socketio.svg',
			alt: 'socketio',
		},
		label: 'Socket.io',
	},
	{
		id: 's11',
		image: {
			src: '/stack/nodejs.svg',
			alt: 'nodejs',
		},
		label: 'Node.js',
	},
	{
		id: 's12',
		image: {
			src: '/stack/expressjs.svg',
			alt: 'expressjs',
		},
		label: 'Express.js',
	},
	{
		id: 's13',
		image: {
			src: '/stack/typescript.svg',
			alt: 'typescript',
		},
		label: 'Typescript',
	},
	{
		id: 's14',
		image: {
			src: '/stack/mongodb.svg',
			alt: 'mongodb',
		},
		label: 'Mongodb',
	},
	{
		id: 's15',
		image: {
			src: '/stack/mysql.svg',
			alt: 'mysql',
		},
		label: 'Mysql',
	},
	{
		id: 's16',
		image: {
			src: '/stack/postgresql.svg',
			alt: 'postgresql',
		},
		label: 'Postgresql',
	},
	{
		id: 's17',
		image: {
			src: '/stack/supabase.svg',
			alt: 'supabase.svg',
		},
		label: 'Supabase',
	},
	{
		id: 's18',
		image: {
			src: '/stack/drizzle.svg',
			alt: 'drizzle',
		},
		label: 'Drizzle',
	},
	{
		id: 's19',
		image: {
			src: '/stack/next-auth.svg',
			alt: 'next-auth',
		},
		label: 'Next auth',
	},
	{
		id: 's20',
		image: {
			src: '/stack/react-query.svg',
			alt: 'react-query',
		},
		label: 'React query',
	},
	{
		id: 's21',
		image: {
			src: '/stack/npm.svg',
			alt: 'npm',
		},
		label: 'Npm',
	},
	{
		id: 's22',
		image: {
			src: '/stack/pnpm.svg',
			alt: 'pnpm',
		},
		label: 'Pnpm',
	},
	// {
	// 	id: 's24',
	// 	image: {
	// 		src: '',
	// 		alt: '',
	// 	},
	// 	label: '',
	// },
];
