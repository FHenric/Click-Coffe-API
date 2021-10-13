import multer from 'multer';
import {resolve} from 'path';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', 'uploads' ),
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
}

// const upload = multer({
//     storage: multer.diskStorage({
//         destination:(req, file, cb) => {
//             cb(null,  './dist/uploads')
//         },
//         filename: (req, file, cb) => {
//             cb( null, file.originalname)
//         }
//     })
// }) 

//     export default upload