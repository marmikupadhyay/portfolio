import React from 'react';

function LogoCard(props) {
	const styles = {
		langCard: {
			fontFamily: 'Lato',
		},
		langlogo: {
			width: '70px',
			filter: 'drop-shadow(0px 0px 3px #353535)',
		},
	};
	return (
		<div
			className='langCard flex flex-col m-2 justify-center font-bold items-center'
			style={styles.langCard}>
			<img src={props.img} alt='' style={styles.langlogo} className='' />
		</div>
	);
}

export default LogoCard;
