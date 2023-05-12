import axios from "axios";

const api = axios.create({
    baseURL: "https://api.staticforms.xyz",
    responseType: "json"
});

api.defaults.headers.post["Content-Type"] = "application/json";

export default api;