import { useState } from 'react';
import { useHMSActions } from '@100mslive/hms-video-react';

function JoinForm() {
	const hmsActions = useHMSActions();
	const [ userName, setUserName ] = useState('');
	const [ authToken, setAuthToken ] = useState('');

	const handleSubmit = () => {
		hmsActions.join({
			userName,
			authToken
		});
	};

	return (
		<form>
			<h2>Join Room</h2>
			<div className="input-container">
				<input
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					id="username"
					type="text"
					name="username"
					placeholder="Enter Username"
				/>
			</div>
			<div className="input-container">
				<input
					value={authToken}
					onChange={(e) => setAuthToken(e.target.value)}
					id="authToken"
					type="text"
					name="authToken"
					placeholder="Enter Auth token"
				/>
			</div>
			<button onClick={handleSubmit} className="btn-primary">
				Join
			</button>
		</form>
	);
}

export default JoinForm;
