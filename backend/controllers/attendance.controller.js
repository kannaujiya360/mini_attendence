const Attendance = require("../models/attendance.model");

// MARK ATTENDANCE
exports.markAttendance = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existing = await Attendance.findOne({
      user: userId,
      date: today,
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Attendance already marked for today",
      });
    }

    const attendance = await Attendance.create({
      user: userId,
      date: today,
      status: "present",
    });

    res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      data: attendance,
    });
  } catch (error) {
    next(error);
  }
};


exports.getMyAttendance = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const records = await Attendance.find({ user: userId }).sort({
      date: -1,
    });

    res.status(200).json({
      success: true,
      data: records,
    });
  } catch (error) {
    next(error);
  }
};