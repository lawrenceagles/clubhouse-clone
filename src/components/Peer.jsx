import {
	selectPeerAudioByID,
	selectIsPeerAudioEnabled,
	selectLocalPeer,
	useHMSActions,
	useHMSStore
} from '@100mslive/hms-video-react';
import { useRef, useEffect } from 'react';

const Peer = ({ peer }) => {
	const videoRef = useRef(null);
	const hmsActions = useHMSActions();
	const peerAudio = useHMSStore(selectPeerAudioByID(peer.id));

	useEffect(
		() => {
			if (videoRef.current && peerAudio) {
				if (peerAudio.enabled) {
					hmsActions.attachVideo(peerAudio.id, videoRef.current);
				} else {
					hmsActions.detachVideo(peerAudio.id, videoRef.current);
				}
			}
		},
		[ peerAudio, hmsActions ]
	);

	return (
		<div className="peer-container">
			<video ref={videoRef} className={`peer-video ${peer.isLocal ? 'local' : ''}`} autoPlay muted playsInline />
			<div className="peer-name">
				{peer.name} {peer.isLocal ? '(You)' : ''}
			</div>
		</div>
	);
};

export default Peer;
