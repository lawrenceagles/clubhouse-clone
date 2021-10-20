import { selectPeers, useHMSStore } from '@100mslive/hms-video-react';
import Peer from './Peer';
import Footer from './Footer';

const Room = () => {
	const peers = useHMSStore(selectPeers);

	return (
		<section className="bg-gray-200 relative min-h-screen antialiased border-t-8 border-black">
			<div className="max-w-sm mx-auto px-6">
				<div className="relative h-screen flex flex-wrap items-center">
					<div className="text-center font-semibold text-black text-2xl"> Welcome to the Room </div>
					<div className="w-full">
						<div className="capitalize font-bold">
							{peers.map((peer) => <Peer key={peer.id} peer={peer} />)}
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</section>
	);
};

export default Room;
