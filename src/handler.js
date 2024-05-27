const test = (request, h) => {
     const response = h.response("<h1>Test Page</h1>").type("text/html").code(200);

     return response;
};

module.exports = { test };
