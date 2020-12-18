import './App.css';
import { useState } from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Middle from './components/Middle';
function App() {
	const theme = {
		background: {
			dark: {
				primary: '#02090f',
				secondary: '#0b1622',
			},
			light: {
				primary: '',
				secondary: '',
			},
		},
		accent: {
			primary: '#8d1bd4',
			secondary: '#14d36d',
			other: '#87e7b4',
		},
		text: {
			light: '#fafafa',
		},
	};
	const [active, setActive] = useState(0);
	const changeActive = (num) => {
		console.log(num);
		setActive(num);
	};
	return (
		<div className='App'>
			<div className='flex flex-col md:flex-row '>
				<LeftSide theme={theme} />
				<Middle theme={theme} active={active} />
				<RightSide
					theme={theme}
					setActive={setActive}
					active={active}
				/>
			</div>
		</div>
	);
}

export default App;
