import { selectPeers, useHMSStore } from '@100mslive/hms-video-react';
import React from 'react';
import Peer from './Peer';

const Room = () => {
	const peers = useHMSStore(selectPeers);
	return (
		<div className="">
			<h2>Room</h2>

			{/* <div className="peers-container">{peers.map((peer) => <Peer key={peer.id} peer={peer} />)}</div> */}
		</div>
	);
};

export default Room;
