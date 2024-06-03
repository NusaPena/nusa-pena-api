const path = require("path");
const fs = require("fs");

const storyList = require("./list/story-list");
const storyDetails = require("./details/story-detail");

const test = (request, h) => {
     const response = h.response("<h1>Test Page</h1>").type("text/html").code(200);

     return response;
};

const getSmallImageHandler = (request, h) => {
     const { imageId } = request.params;     // * http://localhost:5000/images/small/test.jpg

     const imagePath = path.join(__dirname, "images", "small", `${imageId}.jpg`);
          if (fs.existsSync(imagePath)) {
               return h.file(imagePath);
          }

     const response = h.response({
          status: "fail",
          message: "Gagal memukan gambar (Small)",
     });

     response.code(404);
     return response;
};

const getMediumImageHandler = (request, h) => {
     const { imageId } = request.params;     // * http://localhost:5000/images/medium/test.jpg

     const imagePath = path.join(__dirname, "images", "medium", `${imageId}.jpg`);
          if (fs.existsSync(imagePath)) {
               return h.file(imagePath);
          }

     const response = h.response({
          status: "fail",
          message: "Gagal memukan gambar (Medium)",
     });

     response.code(404);
     return response;
};

const getLargeImageHandler = (request, h) => {
     const { imageId } = request.params;     // * http://localhost:5000/images/large/test.jpg

     const imagePath = path.join(__dirname, "images", "large", `${imageId}.jpg`);
          if (fs.existsSync(imagePath)) {
               return h.file(imagePath);
          }

     const response = h.response({
          status: "fail",
          message: "Gagal memukan gambar (Large)",
     });

     response.code(404);
     return response;
};

const getAllStoriesHandler = (request, h) => {
     const { title, category, location } = request.query;
     let filteredStory = [...storyList];

     if (title) {                    // * http://localhost:5000/list?title=Cinderalas
          const filteredTitle = title.toLowerCase();
               filteredStory = filteredStory.filter((story) => story.title.toLowerCase().includes(filteredTitle));
     }

     if (category) {                // * http://localhost:5000/list?category=Dongeng
          const filteredType = category.toLowerCase();
               filteredStory = filteredStory.filter((story) => story.category.toLowerCase().includes(filteredType));
     }

     if (location) {                // * http://localhost:5000/list?location=Jawa%20Timur
          const filteredLocation = location.toLowerCase();
               filteredStory = filteredStory.filter((story) => story.location.toLowerCase().includes(filteredLocation));
     }

     return h.response({
          status: "success",
          stories: filteredStory.map((story) => ({
               id: story.id,
               title: story.title,
               category: story.category,
               imageId: story.imageId,
               storyDesc: story.storyDesc,
          })),
     }).code(200);
};

const getStoryDetailById = (request, h) => {
     const { storyId } = request.params;

     const story = storyDetails.filter((indexStory) => indexStory.id === storyId)[0];
          if (story !== undefined) {
               return {
                    status: "success",
                    stories: {
                         story,
                    },
               };
          }

     const response = h.response({
          status: "fail",
          message: "Detail cerita tidak ditemukan",
     });

     response.code(404);
     return response;
};

module.exports = {
     test,
     getSmallImageHandler,
     getMediumImageHandler,
	getLargeImageHandler,
     getAllStoriesHandler,
     getStoryDetailById,
};
