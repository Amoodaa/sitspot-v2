const cloudinary = require('cloudinary').v2;

cloudinary.config(process.env.CLOUDINARY_URL);

module.exports = image =>
  new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      image,
      {
        crop: 'limit',
        tags: 'places',
        width: 3000,
        height: 2000,
      },
      (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      }
    );
  });
