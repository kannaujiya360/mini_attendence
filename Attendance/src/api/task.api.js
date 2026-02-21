import API from "./axios";

export const createTask = async (data) => {
  const response = await API.post("/tasks", data);
  return response.data;
};

export const getTasks = async () => {
  const response = await API.get("/tasks");
  return response.data;
};

export const updateTask = async (id, data) => {
  const response = await API.put(`/tasks/${id}`, data);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await API.delete(`/tasks/${id}`);
  return response.data;
};