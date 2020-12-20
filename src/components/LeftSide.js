import React from 'react';
import dp from '../img/dp.png';

function LeftSide(props) {
	const theme = props.theme;
	const styles = {
		body: {
			background: theme.background.dark.primary,
			color: theme.accent.secondary,
			fontFamiliy: 'Roboto',
		},
		head: {
			// filter: 'drop-shadow(2px 1px 2px #4444dd)',
		},
	};
	return (
		<div
			style={styles.body}
			className='h-screen w-full left-side fixed md:w-1/4 bg-gray-800 overflow-hidden shadow-lg flex flex-col items-center justify-center'>
			<div className='head'>
				<div className='text-5xl font-light border-t-2 text-center flex flex-col items-center border-b-2 py-5 border-white tracking-wider mx-8'>
					<img src={dp} className='w-2/3 my-6' alt='Profile' />
					Marmik <br /> Upadhyay
				</div>
				<div className='text-5xl font-light text-center flex flex-col items-center border-b-2 py-5 border-white tracking-wider mx-4'>
					<img
						src='https://github-readme-stats.vercel.app/api?username=marmikupadhyay&show_icons=true&count_private=true&theme=radical&hide_border=true'
						className='w-full my-6 shadow-2xl'
						alt='Profile'
					/>
				</div>
			</div>
		</div>
	);
}

export default LeftSide;
