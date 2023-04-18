import express from "express";
import {getAnnouncements, getManageFaculty,getAssignMentor,getAssignPanel } from "../controllers/client.js";


const router = express.Router();
router.get("/announcements", getAnnouncements);
router.get("/manageFaculty", getManageFaculty);
router.get("/AssignMentor", getAssignMentor);
router.get("/AssignPanel", getAssignPanel);


export default router;

