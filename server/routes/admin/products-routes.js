import { Router } from "express";
import { handleImageUpload } from "../../controllers/admin/admin-controller";

import { upload } from "../../helpers/cloudinary";



const router = Router();


router.post('/upload-image', upload.single('my_file'), handleImageUpload );


export default  router;