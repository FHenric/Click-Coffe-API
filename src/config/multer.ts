import multer from 'multer';
import crypto from 'crypto';
import {extname, resolve} from 'path';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            cb(null, new Date().toISOString() + file.originalname);
        },
    })
}







// export default {
//     storage: multer.diskStorage({
//         destination: resolve(__dirname, '..', '..', '..', 'tmp', 'uploads'),
//         filename: (req, file, cb) => {
//             crypto.randomBytes(10,(err, res) => {
//                 if (err) return cb (err);

//                 return cb(null, res.toString('hex') + extname(file.originalname))
//             })
//         },

//     })
// }