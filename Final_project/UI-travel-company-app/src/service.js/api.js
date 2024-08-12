import axios from "axios";
import getConfig from "../utils/config";

const { apiUrl } = getConfig();

const api = axios.create({
  baseURL: apiUrl,
});

const _helper = async (endpoint, method = "GET", ...args) => {
  try {
    switch (method) {
      case "GET":
        return await api.get(endpoint, ...args);
      case "POST":
        return await api.post(endpoint, ...args);
      default:
        throw new Error({ message: "Something went wrong" });
    }
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

// you can write all the API methods to make calls to your backend server

const getCoreValues = async () => {
  return await _helper("/api/core-values", "GET", { timeout: 5000, origin: "www.google.com" });
};

const getUniqueValues = async () => {
  return await _helper("/api/unique-values", "GET", { timeout: 5000 });
};

const getTestimonials = async () => {
  return await _helper("/api/testimonials", "GET", { timeout: 5000 });
};

const getOfferings = async () => {
  return await _helper("/api/offerings", "GET", { timeout: 5000 });
};

export { getCoreValues, getUniqueValues, getTestimonials, getOfferings };
