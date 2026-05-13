"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer_1 = require("multer");
const multerConfig = (filesService) => ({
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const { user, room } = req.body;
            const path = filesService.createUploadPath(user, room);
            cb(null, path);
        },
        filename: (req, file, cb) => {
            const name = filesService.generateFilename(file);
            cb(null, name);
        },
    }),
});
exports.multerConfig = multerConfig;
//# sourceMappingURL=multer.config.js.map