




// import axios from "axios";

// // ✅ Create Axios instance
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL, // e.g. http://localhost:3000/api/v1/
//   withCredentials: true, // optional — if using cookies
// });

// // ✅ Request interceptor: attach token automatically
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );

// // ✅ Response interceptor: handle errors globally
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       // Token expired or unauthorized
//       if (error.response.status === 401) {
//         console.warn("Unauthorized! Redirecting to login...");
//         localStorage.removeItem("token");

//         // Optional: redirect to login page
//         window.location.href = "/auth/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;










// src/api/axios.js
import axios from "axios";

// ✅ Create Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g. https://your-backend-url.com/api/v1
  withCredentials: true, // include cookies if needed
});

// ✅ Request interceptor — attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor — handle auth errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Redirecting to login...");
      localStorage.removeItem("token");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default api;
