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

export const getFormats = async () => {
  const response = await api.get("/formats");
  return response.data.data;
};

export const getJourney = async () => {
  const response = await api.get("/journey");
  return response.data.data;
};

export const getRoles = async () => {
  const response = await api.get("/roles");
  return response.data.data;
};

export const getInquiryCategories = async () => {
  const response = await api.get("/inquiry-categories");
  return response.data.data;
};

export default api;