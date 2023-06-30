import express from "express";

import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import {  contact, courseRequest, getDashboardStat } from "../controllers/otherController.js";
const router = express.Router();

router.route("/contact").post(contact);

router.route("/courserequest").post(courseRequest);

router.route("/admin/stats").get(isAuthenticated, authorizedAdmin, getDashboardStat);

export default router;