import React from 'react';
import WorkCard from './WorkCard';
import works from '../WorksData';
import cloud from '../img/certis/cloud.png';
import rest from '../img/certis/rest.png';

const showCards = (theme) => {
	const cardHtmlArr = works.map((work) => {
		return <WorkCard theme={theme} cardData={work} />;
	});
	return cardHtmlArr;
};

function Experience(props) {
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
				<i
					className='fas fa-hourglass-half mr-6'
					style={styles.logo}></i>
				Experience
			</h1>
			<div className='p-2'>{showCards(theme)}</div>
			<div className='certis mx-5 pb-2'>
				<div className='sub-head px-5 mb-4 pb-2 relative'>
					<h1 className='text-2xl text-white'>Certification</h1>
				</div>
				<div className='certix-box px-5 flex flex-wrap justify-around items-center'>
					<div
						className='flex flex-col w-full mb-4 sm:w-1/3 rounded-b-lg p-3'
						style={{ background: theme.background.dark.primary }}>
						<img src={cloud} alt='' className='' />
						<div className='p-3 pb-0 font-bold text-white'>
							Google 30 Days of Cloud
						</div>
					</div>
					<div
						className='flex flex-col w-full mb-4 sm:w-1/3 rounded-b-lg p-3'
						style={{ background: theme.background.dark.primary }}>
						<img src={rest} alt='' className='' />
						<div className='p-3 pb-0 font-bold text-white'>
							Hackerrank REST Api test
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
