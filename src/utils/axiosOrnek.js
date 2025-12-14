import axios from "axios";

const axiosOrnek = axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com",
        
    });

export default axiosOrnek;