import * as requester from "../utils/requester";

// POST /auth/register
export const registerUser = async data => {
	console.log("registerUser", data);
	const response = await requester.post("/auth/register", data).catch(err => {
		throw err;
	});

	return response;
};

// POST /auth/login
export const loginUser = async data => {
	const response = await requester.post("/auth/login", data).catch(err => {
		throw err;
	});

	return response;
};

// GET /auth/logout
export const logoutUser = async token => {
	const response = await requester
		.get("/auth/logout", undefined, token)
		.catch(err => {
			throw err;
		});

	return response;
};