const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const inert = require("@hapi/inert");

const init = async () => {
	const server = Hapi.server({
		port: 5000,
		host: "localhost",
		routes: {
			cors: {
				origin: ["*"],
			},
		},
	});
	await server.register(inert);

	server.route(routes);

	await server.start();
	console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
