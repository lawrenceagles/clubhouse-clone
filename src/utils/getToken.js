import { v4 as uuidv4 } from 'uuid';
const tokenEndPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
const room_id = process.env.REACT_APP_ROOM_ID;

const getToken = async (role) => {
	const user_id = uuidv4();

	const response = await fetch(`${tokenEndPoint}api/token`, {
		method: 'POST',
		body: JSON.stringify({
			user_id,
			role,
			room_id
		})
	});

	const { token } = await response.json();

	return token;
};

export default getToken;
