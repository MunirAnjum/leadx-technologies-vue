import axios from "axios";

const API_BASE_URL = "https://localhost:44375/api/contact";

export const sendContactForm = async (data) => {
    return await axios.post(`${API_BASE_URL}`, data);
};