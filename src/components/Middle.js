import React, { useState } from 'react';
import About from './About';
import Achive from './Achive';
import Contact from './Contact';
import Experience from './Experience';
import Skills from './Skills';
import Work from './Work';

function Middle(props) {
	const theme = props.theme;
	const styles = {
		body: {
			background: theme.background.dark.secondary,
			marginLeft: '25%',
			height: 'auto',
			minHeight: '100vh',
		},
	};
	const returnActive = () => {
		switch (props.active) {
			case 0:
				return <About theme={theme} />;
			case 1:
				return <Skills theme={theme} />;
			case 2:
				return <Work theme={theme} />;
			case 3:
				return <Experience theme={theme} />;
			case 4:
				return <Achive theme={theme} />;
			case 5:
				return <Contact theme={theme} />;
			default:
				return '';
		}
	};
	return (
		<div style={styles.body} className='md:h-screen middle w-full md:w-1/2'>
			{returnActive()}
		</div>
	);
}

export default Middle;
