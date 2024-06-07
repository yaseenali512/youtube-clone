import axios from "axios";

const API_KEY = "AIzaSyCUd3G6RgdlzWd-w8KBzXlER1iuDVx6Wf8";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const api = axios.create({
  baseURL: BASE_URL,
});

export const searchVideos = async (query) => {
  try {
    const response = await api.get("/search", {
      params: {
        q: query,
        key: API_KEY,
        part: "snippet",
        maxResults: 10,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error searching videos:", error);
    return [];
  }
};

export default api;
