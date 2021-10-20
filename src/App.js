import { Fragment, useEffect } from 'react';
import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/hms-video-react';
import JoinForm from './components/JoinRoom';
import Room from './components/Room';

const App = () => {
	const isConnected = useHMSStore(selectIsConnectedToRoom);
	const hmsActions = useHMSActions();

	useEffect(
		() => {
			window.onunload = () => {
				if (isConnected) {
					hmsActions.leave();
				}
			};
		},
		[ hmsActions, isConnected ]
	);

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
