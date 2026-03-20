import axios, { isAxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = "An unexpected error occurred";

    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      switch (status) {
        case 400:
          errorMessage = data.error || "Bad request";
          break;
        case 401:
          errorMessage = "Unauthorized. Please log in.";
          break;
        case 404:
          errorMessage = data.error || "Resource not found";
          break;
        case 409:
          errorMessage = data.error || "Conflict occurred";
          break;
        case 500:
          errorMessage = "Server error. Please try again later.";
          break;
        default:
          errorMessage = data.error || data.message || errorMessage;
      }
    } else if (error.request) {
      // Request made but no response received
      errorMessage = "Network error. Please check your connection.";
    } else {
      // Error in request setup
      errorMessage = error.message;
    }

    // Attach user-friendly message
    error.userMessage = errorMessage;

    return Promise.reject({
      message: errorMessage,
      status: error.response ? error.response.status : null,
      data: error.response ? error.response.data : null,
    });
  },
);

export default axiosInstance;
