const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadImgToCloudinary = async (fileData) => {
  try {
    const tempDir = path.join(__dirname, "temp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    const tempFilePath = path.join(tempDir, fileData.name);

    fs.writeFileSync(tempFilePath, fileData.data);

    const result = await cloudinary.uploader.upload(tempFilePath, {
      folder: "your_folder_name",
      public_id: fileData.name,
    });

    if (!result.secure_url) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    fs.unlinkSync(tempFilePath);

    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error.message);
    throw error;
  }
};

module.exports = uploadImgToCloudinary;
