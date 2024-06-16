const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDirectory = "src/images/medium";
const outputDirectories = {
	small: "src/images/small",
	large: "src/images/large",
};

const sizes = {
	small: 360,
	large: 1024,
};

// ? Create the output directory if it doesn't already exist
Object.values(outputDirectories).forEach((dir) => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
});

fs.readdir(inputDirectory, (err, files) => {
	if (err) throw err;

	files.forEach((file) => {
		if (path.extname(file) === ".jpg") {
			const inputPath = path.join(inputDirectory, file);

			Object.keys(sizes).forEach((sizeKey) => {
				const size = sizes[sizeKey];
				const outputPath = path.join(
					outputDirectories[sizeKey],
					file,
				);

				sharp(inputPath)
					.resize(size, size) // ? Resize to a square
					.toFile(outputPath, () => {
						if (err) throw err;
                console.log(
                  `Resized ${file} to ${sizeKey} (${size}x${size})`,
                );
					});
			});
		}
	});
});
