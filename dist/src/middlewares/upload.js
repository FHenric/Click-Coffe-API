"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
exports.default = {
    storage: multer_1.default.diskStorage({
        destination: (0, path_1.resolve)(__dirname, '..', 'uploads'),
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
};
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
