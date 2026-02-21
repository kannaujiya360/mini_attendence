import API from "./axios";

export const markAttendance = async () => {
  const response = await API.post("/attendance/mark");
  return response.data;
};

export const getMyAttendance = async () => {
  const response = await API.get("/attendance/my");
  return response.data;
};