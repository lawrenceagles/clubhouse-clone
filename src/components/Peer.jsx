const Peer = ({ peer }) => {
	return (
		<div className="peer-container">
			<div className="peer-name">
				{peer.name} - {peer.roleName} {peer.isLocal ? '(You)' : ''}
			</div>
		</div>
	);
};

export default Peer;
