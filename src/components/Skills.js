import React from 'react';
import LogoCard from './LogoCard';

import Cimg from '../img/c.png';
import Cppimg from '../img/cpp.png';
import JSimg from '../img/js.png';
import Pyimg from '../img/python.png';
import Ejsimg from '../img/ejs.png';
import Cssimg from '../img/css.png';
import Htmlimg from '../img/html.png';

import Mongoimg from '../img/mongo.png';
import Expressimg from '../img/express.png';
import Reactimg from '../img/react.png';
import Nodeimg from '../img/node.png';
import Mongooseimg from '../img/mongoose.png';

import Vsimg from '../img/vs.png';
import Postimg from '../img/postman.png';
import Gitimg from '../img/git.png';
import Chaiimg from '../img/chai.png';
import Mochaimg from '../img/mocha.png';

function Skills(props) {
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
		langCard: {
			fontFamily: 'Lato',
		},
		langBox: {
			background: theme.background.dark.primary,
		},
		langlogo: {
			width: '70px',
		},
		subHead: {
			background: theme.accent.primary,
			opacity: '0.85',
			fontWeight: '600',
		},
	};
	return (
		<div className=''>
			<h1
				className='px-10 pt-5 font-light flex items-center'
				style={styles.head}>
				<i className='fas fa-cogs mr-6' style={styles.logo}></i>
				Skills and Tools
			</h1>
			<div className='lang m-4 shadow-2xl' style={styles.langBox}>
				<h1
					className='text-2xl pl-4 pt-4'
					style={{ color: theme.accent.secondary }}>
					Languages
				</h1>
				<div className='flex flex-col md:flex-row'>
					<div className='list m-2 text-xl flex flex-wrap justify-center items-center w-full md:w-7/12'>
						<LogoCard img={Cimg} />
						<LogoCard img={Cppimg} />
						<LogoCard img={JSimg} />
						<LogoCard img={Pyimg} />
						<LogoCard img={Ejsimg} />
						<LogoCard img={Cssimg} />
						<LogoCard img={Htmlimg} />
					</div>
					<div className='lang-image p-4 w-full md:w-5/12 flex justify-center'>
						<img
							src='https://github-readme-stats.vercel.app/api/top-langs/?username=marmikupadhyay&theme=radical&count_private=true&hide_border=true&hide_title=true'
							alt=''
							className='m-2'
						/>
					</div>
				</div>
			</div>
			<div className='tech m-4 shadow-2xl' style={styles.langBox}>
				<h1
					className='text-2xl pl-4 py-4'
					style={{ color: theme.accent.secondary }}>
					Technologies
				</h1>
				<div className='flex flex-col'>
					<div className='list m-2 text-xl flex flex-wrap items-center w-full'>
						<div
							className='p-4 md:rounded-r-full rounded-b-full shadow-2xl mr-4 w-full md:w-3/12 text-center text-white text-xl text-bold'
							style={styles.subHead}>
							Tech Stack
						</div>
						<LogoCard img={Mongoimg} />
						<LogoCard img={Expressimg} />
						<LogoCard img={Reactimg} />
						<LogoCard img={Nodeimg} />
						<LogoCard img={Mongooseimg} />
					</div>
					<div className='list m-2 text-xl flex flex-wrap items-center w-full'>
						<div
							className='p-4 md:rounded-r-full rounded-b-full shadow-2xl mr-4 w-full md:w-3/12 text-center text-white text-xl text-bold'
							style={styles.subHead}>
							Tools / Pkgs
						</div>
						<LogoCard img={Vsimg} />
						<LogoCard img={Gitimg} />
						<LogoCard img={Postimg} />
						<LogoCard img={Chaiimg} />
						<LogoCard img={Mochaimg} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
