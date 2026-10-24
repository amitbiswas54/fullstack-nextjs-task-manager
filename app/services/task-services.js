import { httpAxios } from "../helper/axiosHelper.js";

export const addTask = async (task) => {
  try {
    const response = await httpAxios.post("/tasks", task);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    return { success: false, error };
  }
};

export const getTask = async (userId) => {
  try {
    const response = await httpAxios.get(`/users/${userId}/task`);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    return { success: false, error };
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await httpAxios.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error delete task:", error);
    return { success: false, error };
  }
};
