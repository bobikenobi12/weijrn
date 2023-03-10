import * as requester from "../utils/requester";

// GET /jrn/tags

export const getTags = async () => {
	const response = await requester.get("/jrn/tags").catch(err => {
		throw err;
	});

	return response;
};

// GET /jrn/tags/:nickname

export const getTag = async (nickname, macAddress) => {
	const response = await requester
		.get(`/jrn/tags/${nickname}`, undefined, null, macAddress)
		.catch(err => {
			throw err;
		});

	return response;
};

// POST /jrn/tags/:nickname

export const createTag = async (nickname, token, macAddress) => {
	const response = await requester
		.post(`/jrn/tags/${nickname}`, undefined, token, macAddress)
		.catch(err => {
			throw err;
		});

	return response;
};

// PUT   /jrn/tags/:x-token

export const updateTag = async (nickname, token) => {
	const response = await requester
		.put(`/jrn/tags/${nickname}`, undefined, token, macAddress)
		.catch(err => {
			throw err;
		});

	return response;
};

// DELETE  /jrn/tags/:x-token

export const deleteTag = async (nickname, token) => {
	const response = await requester
		.del(`/jrn/tags/${nickname}`, undefined, token)
		.catch(err => {
			throw err;
		});

	return response;
};