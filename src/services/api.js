import axios from "axios";

const API = axios.create({
  baseURL: "https://resumeforge-backend-6o0c.onrender.com/api",
});

export default API;