const cloudinary = require("cloudinary").v2;
const uploadImgToCloudinary = async (imageFile) => {
  try {

    cloudinary.config({
      secure: true,
    });

    console.log(cloudinary.config(),"oooooooooooooo");
    console.log(imageFile, "imageFileimageFileimageFile");
    const formData = new FormData();
    formData.append("file", imageFile);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const responseData = await response.json();
    console.log(responseData, "ressss");

    if (!responseData.secure_url) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    return responseData.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error.message);
    throw error;
  }
};

module.exports = uploadImgToCloudinary;
