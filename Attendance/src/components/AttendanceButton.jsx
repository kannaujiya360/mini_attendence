import { useState } from "react";
import { markAttendance } from "../api/attendance.api";

const AttendanceButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleMarkAttendance = async () => {
    try {
      setLoading(true);
      const res = await markAttendance();
      setMessage(res.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handleMarkAttendance}
        disabled={loading}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 disabled:opacity-50"
      >
        {loading ? "Marking..." : "Mark Attendance"}
      </button>

      {message && (
        <p className="mt-3 text-sm text-gray-700 font-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default AttendanceButton;