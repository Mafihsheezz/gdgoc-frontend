import axios from "axios";

const api = axios.create({
  baseURL: "https://gdgoc-ugm-api.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTracks = async () => {
  const response = await api.get("/tracks");
  return response.data.data;
};

export const getTrackById = async (id) => {
  const response = await api.get(`/tracks/${id}`);
  return response.data.data;
};

export const getValues = async () => {
  const response = await api.get("/values");
  return response.data.data;
};

export default api;