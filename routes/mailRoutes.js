import { mailSender} from "../controllers/mailControllers.js";
import express from "express";


const mailRoutes = express.Router();

mailRoutes.post('/mail', mailSender)

export default mailRoutes;
