import React from 'react';

function WorkCard(props) {
	const theme = props.theme;
	const styles = {
		expCard: {},
		cardTag: {
			// background: theme.accent.secondary,
			background: theme.background.dark.primary,
			color: theme.accent.primary,
			fontFamily: 'Lato',
			fontWeight: 'bold',
			fontSize: '1.2em',
		},
		cardHead: {
			background: theme.background.dark.primary,
			color: theme.accent.secondary,
			fontWeight: 'bold',
		},
		cardBody: {
			background: theme.background.dark.primary,
			fontSize: '1.1em',
		},
	};
	return (
		<div
			className='exp-card text-white m-2 mb-8 shadow-xl'
			style={styles.expCard}>
			<div className='head'>
				<span
					className='p-2 text-center rounded-t-full block w-64'
					style={styles.cardTag}>
					{props.cardData.post}
				</span>
				<div
					className='flex sm:justify-between p-2 pt-4 px-6 rounded-tr-xl'
					style={styles.cardHead}>
					<a href={props.cardData.link} className='work-link'>
						<span className=''>
							{' '}
							{props.cardData.organization}{' '}
						</span>
					</a>
					<span className=''> {props.cardData.timeline}</span>
				</div>
			</div>
			<div className='p-2 px-6 rounded-b-xl' style={styles.cardBody}>
				<p>{props.cardData.desc}</p>
			</div>
		</div>
	);
}

export default WorkCard;
