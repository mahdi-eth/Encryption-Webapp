import axios from "axios";

export const BASE_INSTANCE = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 25000
});
