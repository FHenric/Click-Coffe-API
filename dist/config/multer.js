"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
exports.default = {
    storage: multer_1.default.diskStorage({
        destination: (0, path_1.resolve)(__dirname, '..', '..', '..', 'tmp', 'uploads'),
        filename: function (req, file, cb) {
            cb(null, new Date().toISOString() + file.originalname);
        },
    })
};
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
