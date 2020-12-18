import React from 'react';

function Contact(props) {
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
				<i className='fas fa-comments mr-6' style={styles.logo}></i>
				Get in Touch
			</h1>
		</div>
	);
}

export default Contact;
