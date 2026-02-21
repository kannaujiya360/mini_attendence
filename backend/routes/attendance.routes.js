const express = require("express");
const router = express.Router();

const {
  markAttendance,
  getMyAttendance,
} = require("../controllers/attendance.controller");

const { protect } = require("../middlewares/auth.middleware");


router.post("/mark", protect, markAttendance);
router.get("/my", protect, getMyAttendance);

module.exports = router;