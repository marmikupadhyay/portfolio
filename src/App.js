import './App.css';
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
	return (
		<div className='App'>
			<div className='flex flex-col md:flex-row '>
				<LeftSide theme={theme} />
				<Middle theme={theme} />
				<RightSide theme={theme} />
			</div>
		</div>
	);
}

export default App;
