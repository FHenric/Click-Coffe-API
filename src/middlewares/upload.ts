import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
        destination:(req, file, cb) => {
            cb(null,  './uploads')
        },
        filename: (req, file, cb) => {
            cb( null, file.originalname)
        }
    })
}) 

    export default upload