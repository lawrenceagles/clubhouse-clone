import { Fragment } from 'react';
import { selectIsConnectedToRoom, useHMSStore } from '@100mslive/hms-video-react';
import JoinForm from './components/JoinRoom';
import Room from './components/Room';

const App = () => {
	const isConnected = useHMSStore(selectIsConnectedToRoom);

	return (
		<div className="App">
			{isConnected ? (
				<Fragment>
					<Room />
				</Fragment>
			) : (
				<JoinForm />
			)}
		</div>
	);
};

export default App;
