import { selectIsLocalAudioEnabled, useHMSActions, useHMSStore } from '@100mslive/hms-video-react';

function Footer() {
	const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
	const hmsActions = useHMSActions();

	const toggleAudio = () => {
		hmsActions.setLocalAudioEnabled(!audioEnabled);
	};

	return (
		<div className="control-bar">
			<button className="btn-control" onClick={toggleAudio}>
				{audioEnabled ? 'Mute' : 'Unmute'}
			</button>
		</div>
	);
}

export default Footer;
