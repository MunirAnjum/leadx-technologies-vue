import axios from "axios";

const API_BASE_URL = "https://localhost:44375/api/blog";

export const sendBlog = async (data) => {
    return await axios.post(`${API_BASE_URL}`, data)
}