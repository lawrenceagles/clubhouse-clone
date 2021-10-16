import { useState } from 'react';
import {
	selectIsLocalAudioEnabled,
	selectIsConnectedToRoom,
	useHMSActions,
	useHMSStore
} from '@100mslive/hms-video-react';

function Footer() {
	const [ mute, setMute ] = useState(true);
	const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
	const isConnected = useHMSStore(selectIsConnectedToRoom);
	const hmsActions = useHMSActions();

	const leaveRoom = () => {
		if (isConnected) {
			hmsActions.leave();
		}
	};

	const toggleAudio = () => {
		setMute(!mute);
		hmsActions.setLocalAudioEnabled(!audioEnabled);
	};

	return (
		<div className="w-full flex justify-between h-18 items-center">
			<button
				className={` rounded-full h-20 w-20 flex items-center justify-center mt-3 text-lg font-semibold  text-white rounded-lg block shadow-xl hover:text-white ${mute
					? 'bg-green-700'
					: 'bg-red-700'} `}
				onClick={toggleAudio}
			>
				{audioEnabled ? 'Mute' : 'Unmute'}
			</button>

			<button
				className={` mt-3 text-white rounded-lg px-6 py-2 block shadow-xl hover:text-white bg-red-700 hover:bg-red-900`}
				onClick={leaveRoom}
			>
				Leave Room
			</button>
		</div>
	);
}

export default Footer;
