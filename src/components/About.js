import React from 'react';
import Me from '../img/about.png';

function About(props) {
	const theme = props.theme;
	const styles = {
		body: {},
		head: {
			fontSize: '3.5em',
			color: theme.accent.other,
			fontFamily: 'Lato',
		},
		logo: {
			color: theme.accent.other,
			overflow: 'hidden',
			boxSizing: 'border-box',
		},
		svg: {},
	};
	return (
		<div className='flex flex-col relative'>
			<h1
				className='px-10 pt-5 font-light flex items-center'
				style={styles.head}>
				<i className='fas fa-id-card mr-6' style={styles.logo}></i>
				About Me
			</h1>
			<div className='relative flex items-center'>
				{/* SVG */}
				<svg
					height='40vw'
					width='40vw'
					style={styles.svg}
					className='svg-about pl-8 -my-32'
					viewBox='0 0 200 200'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fill={theme.accent.other}
						d='M20.5,-37.1C25.5,-32.6,27.9,-25,28.6,-18.3C29.4,-11.6,28.6,-5.8,36.2,4.4C43.9,14.7,60.1,29.3,63.5,43.3C66.9,57.2,57.6,70.4,44.9,72.2C32.2,74,16.1,64.3,5,55.7C-6.2,47.1,-12.3,39.6,-22.7,36.4C-33.1,33.3,-47.7,34.7,-58.5,29.3C-69.2,24,-76.2,12,-75.3,0.5C-74.4,-11,-65.7,-21.9,-57.1,-31.1C-48.6,-40.2,-40.1,-47.5,-30.6,-49.4C-21.1,-51.4,-10.5,-47.9,-1.4,-45.5C7.7,-43,15.4,-41.6,20.5,-37.1Z'
						transform='translate(100 100)'
					/>
				</svg>
				{/* About Box */}
				<div className='info-box flex items-center flex-row pl-4 absolute w-full z-10'>
					<div className='m-4 w-1/3'>
						<img src={Me} alt='' className='w-full info-img' />
					</div>
					<div className='w-2/3 pr-20 pt-4 text-2xl'>
						Hey There ! <br /> <br /> I am Marmik Upadhyay, a
						<b style={{ color: theme.accent.primary }}>
							{' '}
							CSE Sophomore
						</b>{' '}
						at{' '}
						<b style={{ color: theme.accent.primary }}>
							{' '}
							NIT Tiruchirapalli
						</b>{' '}
						and a
						<b style={{ color: theme.accent.primary }}>
							{' '}
							Full Stack Web Developer
						</b>
						.
					</div>
				</div>
			</div>
			{/* <div className='hobby flex flex-col justify-items-center shadow-2xl border-2 m-8'>
				<div className='ls w-1/3 border-r-2'>
					<h1 className='text-white text-center text-2xl p-4'>
						Hobbies <br /> and <br /> Interests
					</h1>
				</div>
				<div className='rs flex flex-col w-2/3'></div>
			</div> */}
		</div>
	);
}

export default About;
