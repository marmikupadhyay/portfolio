import React from 'react';
import projects from '../ProjectsData';
import ProjectCard from './ProjectCard';

const showCards = (projects, theme) => {
	let cardArr = projects.map((project) => {
		return <ProjectCard cardData={project} theme={theme} />;
	});
	return cardArr;
};

function Work(props) {
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
	};
	return (
		<div className=''>
			<h1
				className='px-10 pt-5 font-light flex items-center'
				style={styles.head}>
				<i className='fas fa-file-code mr-6' style={styles.logo}></i>
				Work and Projects
			</h1>
			<div className='m-3'>
				<div className='flex flex-wrap p-2 box-border justify-around'>
					{showCards(projects, theme)}
				</div>
				<h1 className='text-white text-xl w-full p-2 text-center'>
					Checkout{' '}
					<a
						style={{
							color: theme.accent.primary,
							fontWeight: 'bold',
						}}
						href='https://github.com/marmikupadhyay'>
						{' '}
						Github{' '}
					</a>{' '}
					for more big and small projects.
				</h1>
			</div>
		</div>
	);
}

export default Work;
