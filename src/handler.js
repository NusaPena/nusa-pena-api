const shuffle = require("./utils/shuffle-stories");

const path = require("path");
const fs = require("fs");

const storyList = require("./stories-data/stories");
const storyDetails = require("./stories-data/stories");

const getInformationHandler = (request, h) => h.response({
     status: "success",
     message: "API Documentation: https://github.com/NusaPena/nusa-pena-api",
}).code(200);

const getImageHandler = (size) => (request, h) => {
     const { imageId } = request.params;

     const imagePath = path.join(__dirname, "images", size, `${imageId}.jpg`);
          if (fs.existsSync(imagePath)) {
               return h.file(imagePath);
          }

     return h.response({
          status: "fail",
          message: `Gagal menemukan gambar (${size})`,
     }).code(404);
};

const getAllStoriesHandler = (request, h) => {
     const { title, category } = request.query;
     let filteredStory = [...storyList];

     if (title) {
          const filteredTitle = title.toLowerCase();
               filteredStory = filteredStory.filter(
                    (story) => story.title.toLowerCase().includes(filteredTitle),
               );
     }

     if (category) {
          const filteredType = category.toLowerCase();
               filteredStory = filteredStory.filter(
                    (story) => story.category.toLowerCase().includes(filteredType),
               );
     }

     // ? Shuffle object of stories array
     filteredStory = shuffle(filteredStory);

     // ? Remove duplicates object from filteredStory
     const uniqueStories = [];
     const seenIds = new Set();
          filteredStory.forEach((story) => {
               if (!seenIds.has(story.id)) {
                    uniqueStories.push(story);
                    seenIds.add(story.id);
               }
          });

     return h.response({
          status: "success",
          stories: uniqueStories.map((story) => ({
               id: story.id,
               title: story.title,
               category: story.category,
               origin: story.origin,
               imageId: story.imageId,
               synopsis: story.synopsis,
          })),
     }).code(200);
};

const getStoryDetailById = (request, h) => {
     const { storyId } = request.params;
     console.log(`Received request for storyId: ${storyId}`);

     const story = storyDetails.find((indexStory) => indexStory.id === storyId);
          if (story) {
               return h.response({
                    status: "success",
                    story,
               }).code(200);
          }

     return h.response({
          status: "fail",
          message: "Detail cerita tidak ditemukan",
     }).code(404);
};

module.exports = {
     getInformationHandler,
     getSmallImageHandler: getImageHandler("small"),
     getMediumImageHandler: getImageHandler("medium"),
     getLargeImageHandler: getImageHandler("large"),
     getAllStoriesHandler,
     getStoryDetailById,
};
