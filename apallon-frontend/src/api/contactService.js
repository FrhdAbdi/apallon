import api from "./client";

export const sendMessage = async (message) => {
  const response = await api.post("/contact", message);
  return response.data;
};
