import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HMSRoomProvider } from '@100mslive/hms-video-react';

ReactDOM.render(
	<React.StrictMode>
		<HMSRoomProvider>
			<App />
		</HMSRoomProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
