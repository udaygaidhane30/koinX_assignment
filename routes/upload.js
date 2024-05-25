import { Router } from "express";
import multer from "multer";
import uploadCSV from "../controllers/fileUpload.controller.js";

const router = Router();
// var storage = multer.memoryStorage();
// var upload = multer({ storage: storage });

const storage = multer.diskStorage({
  destination: "uploads/csv/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload-csv", upload.single("file"), function (req, res, next) {
  uploadCSV(req, res);
});

export default router;
