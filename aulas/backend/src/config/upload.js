const multer = require('multer'),
    path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname),
                name = path.basename(file.originalname, ext)
            cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
}