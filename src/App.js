import { useEffect } from 'react';
import { useHMSActions } from '@100mslive/hms-video-react';

import JoinForm from './components/JoinClub';

const App = () => {
	const hmsActions = useHMSActions();

	// leaves a room whenever the user closes the window or refreshes the tab.
	useEffect(
		() => {
			window.onunload = () => {
				hmsActions.leave();
			};
		},
		[ hmsActions ]
	);

	return (
		<div className="App">
			<JoinForm />
		</div>
	);
};

export default App;
