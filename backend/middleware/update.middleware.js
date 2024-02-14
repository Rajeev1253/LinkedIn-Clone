
import multer from "multer";
import path from "path";

 const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
           return cb(null, ("uploads"))
        },
        filename: (req, file, cb) => {
           return cb(null, `${Date.now()}_${file.originalname}`)
        }
 
    })
}).fields([{name: 'images', maxCount: 12}]);

export default upload;