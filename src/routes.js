const { test } = require("./handler");

const routes = [
	{
		method: "*",
		path: "/",
		handler: test,
	},
];

module.exports = routes;
