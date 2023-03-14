import axios from "axios";

export const BASE_INSTANCE = axios.create({
    baseURL: "https://encryptor-api.onrender.com/",
    timeout: 25000
});
