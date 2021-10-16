import { useState } from 'react';
import { useHMSActions } from '@100mslive/hms-video-react';

function JoinForm() {
	const hmsActions = useHMSActions();
	const [ userName, setUserName ] = useState('');
	// const [ authToken, setAuthToken ] = useState('');

	const handleSubmit = () => {
		console.log('sumit', userName);
		hmsActions.join({ userName });
	};

	return (
		<section className="bg-gray-200 relative min-h-screen antialiased border-t-8 border-black">
			<div className="max-w-sm mx-auto px-6">
				<div className="relative h-screen flex flex-wrap items-center">
					<div className="w-full relative">
						<div className="mt-6">
							<div className="text-center font-semibold text-black text-2xl"> Join Room </div>

							<form className="mt-8">
								<div className="mx-auto max-w-lg ">
									<div className="py-1">
										<span className="px-1 text-sm text-gray-600">Username</span>
										<input
											onChange={(e) => setUserName(e.target.value)}
											value={userName}
											placeholder="Enter Username"
											type="text"
											className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 
         border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500
         focus:bg-white focus:border-gray-600 focus:outline-none"
										/>
									</div>

									<button
										type="button"
										onClick={handleSubmit}
										className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white 
     rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
									>
										Join
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default JoinForm;
