const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
            const extension = path.extname(file.originalname);
            const name = path.basename(file.originalname, extension);
            const finalName = crypto.createHash('md5').update(name + Date.now()).digest('hex');

            callback(null, `${finalName}${extension}`);
        },
    }),
}