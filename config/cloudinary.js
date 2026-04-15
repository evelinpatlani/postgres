const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "PLANTAS",
  api_key: "379278483236291",
  api_secret: "NjGfrFYhwx_GDUrfbCXtYF9vkPo"
});

module.exports = cloudinary;
