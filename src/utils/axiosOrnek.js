import axios from "axios";

const LOCAL_BACKEND_URL = "http://localhost:8080";
// NOT: Yukarısı daha sonra kendi backend URL'ime göre değişmeli!
const BASE_API_PATH = "/ecommerce";

const axiosOrnek = axios.create({
    baseURL: `${LOCAL_BACKEND_URL}${BASE_API_PATH}`,
    timeout: 5000,
    headers: {
    "Content-Type": "application/json",
    },
});

export default axiosOrnek;
// NOT: Önceden kullandığımız Workintech dummy API Linki -> "https://workintech-fe-ecommerce.onrender.com"