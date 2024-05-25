import { Router } from "express";
import multer from "multer";
import uploadCSV from "../controllers/fileUpload.controller.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload-csv", upload.single("file"), function(req, res){uploadCSV});

export default router;
