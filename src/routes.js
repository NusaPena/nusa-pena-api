const {
	test,
	getSmallImageHandler,
	getMediumImageHandler,
	getLargeImageHandler,
	getAllStoriesHandler,
	getStoryDetailById,
} = require("./handler");

const routes = [
	{
		method: "*",
		path: "/",
		handler: test,
	},
	{
		method: "GET",
		path: "/images/small/{imageId}",
		handler: getSmallImageHandler,
	},
	{
		method: "GET",
		path: "/images/medium/{imageId}",
		handler: getMediumImageHandler,
	},
	{
		method: "GET",
		path: "/images/large/{imageId}",
		handler: getLargeImageHandler,
	},
	{
		method: "GET",
		path: "/list",
		handler: getAllStoriesHandler,
	},
	{
		method: "GET",
		path: "/details/{storyId}",
		handler: getStoryDetailById,
	},
];

module.exports = routes;
