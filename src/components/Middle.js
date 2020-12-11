import React from 'react';

function Middle(props) {
	const theme = props.theme;
	const styles = {
		body: {
			background: theme.background.dark.secondary,
		},
	};
	return (
		<div
			style={styles.body}
			className='h-screen w-full md:w-1/2 overflow-hidden'></div>
	);
}

export default Middle;
