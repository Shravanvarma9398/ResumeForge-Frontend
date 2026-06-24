import axios from "axios";

const API = axios.create({
  baseURL: "https://resumeforge-backend-ep0g.onrender.com/api",
});

export default API;
