import express from "express";
import {getAnnouncements, getManageFaculty } from "../controllers/client.js";


const router = express.Router();
router.get("/announcements", getAnnouncements);
router.get("/manageFaculty", getManageFaculty);

export default router;

