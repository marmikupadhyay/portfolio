import React from 'react';
import '../App.css';

function RightSide(props) {
	const theme = props.theme;
	const styles = {
		body: {
			background: theme.background.dark.primary,
			color: theme.accent.secondary,
			fontFamiliy: 'Roboto',
		},
		iconBar: {
			color: theme.accent.primary,
		},
		svg: {
			// top: '50%',
		},
	};
	return (
		<div
			style={styles.body}
			className='h-screen w-full md:flex md:w-1/4 overflow-hidden bg-gray-800 shadow-md flex flex-row relative'>
			<div className='w-1/2 relative'>
				<div className='nav-bar absolute text-2xl pl-0'>
					<ul className=''>
						<li className='nav-item active list-none py-2'>
							<a href='' className=''>
								About Me
							</a>
						</li>
						<li className='nav-item list-none py-2'>
							<a href=''> Skills</a>
						</li>
						<li className='nav-item list-none py-2'>
							<a href=''> Work</a>
						</li>
						<li className='nav-item list-none py-2'>
							<a href=''> Experience</a>
						</li>
						<li className='nav-item list-none py-2'>
							<a href=''> Achivements</a>
						</li>
						<li className='nav-item list-none py-2'>
							<a href=''> Get In Touch</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='social w-1/2'>
				<svg
					height='700'
					width='700'
					viewBox='0 0 200 200'
					style={styles.svg}
					className='svg-blob'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fill='#14D36D'
						d='M39.9,-66.7C50.7,-62.8,57.8,-50.2,63,-37.6C68.2,-25,71.5,-12.5,69.1,-1.4C66.7,9.7,58.6,19.4,51.1,28C43.6,36.6,36.7,44.1,28.2,49.7C19.8,55.4,9.9,59.2,-0.8,60.7C-11.6,62.1,-23.2,61.2,-35.1,57.5C-47,53.9,-59.3,47.6,-62.8,37.6C-66.4,27.5,-61.2,13.8,-62.9,-1C-64.5,-15.7,-73,-31.3,-68.7,-40.1C-64.4,-48.8,-47.3,-50.6,-33.7,-52.8C-20.2,-55.1,-10.1,-57.8,2.2,-61.7C14.5,-65.5,29.1,-70.5,39.9,-66.7Z'
						transform='translate(80 100)'
					/>
				</svg>
				<div className='icon-bar pl-20' style={styles.iconBar}>
					<a
						href='https://github.com/marmikupadhyay'
						className='github'>
						<i className='fa fa-github'></i>
					</a>
					<a
						href='mailto:marmikupadhyay.mu@gmail.com'
						className='google'>
						<i className='fa fa-envelope'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/marmik-upadhyay-8657bb1b5/'
						className='linkedin'>
						<i className='fa fa-linkedin'></i>
					</a>
					<a
						href='https://www.instagram.com/_marmik_07/'
						className='instagram'>
						<i className='fa fa-instagram'></i>
					</a>
				</div>
			</div>
			<div className='absolute text-2xl bottom-0 text-center w-full'>
				Made with
				<span className='px-2' style={{ color: theme.accent.primary }}>
					&#9829;
				</span>
				by Marmik
			</div>
		</div>
	);
}

export default RightSide;
