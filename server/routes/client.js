import express from "express";
import {getAnnouncements, getManageFaculty,getAssignMentor,getAssignPanel,getSubmission,getGroupManage} from "../controllers/client.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

router.get("/announcements",verifyToken, getAnnouncements);
router.get("/manageFaculty", verifyToken,getManageFaculty);
router.get("/AssignMentor", verifyToken,getAssignMentor);
router.get("/AssignPanel", verifyToken,getAssignPanel);
router.get("/GroupManage",verifyToken, getGroupManage);
router.get("/Submission", verifyToken,getSubmission);



export default router;

