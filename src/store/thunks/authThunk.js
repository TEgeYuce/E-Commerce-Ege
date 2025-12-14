import axiosOrnek from "../../utils/axiosOrnek";
import { setUser } from "../actions/clientAction";

export const checkToken = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    if(!token)
        return;

    try {
        axiosOrnek.defaults.headers.common["Authorization"] = token;
        const response = await axiosOrnek.get("/verify");
        const {name, email, role_id, token: responseToken} = response.data;

        dispatch(setUser({name, email, role_id}, [], []));
        localStorage.setItem("token", responseToken);
        axiosOrnek.defaults.headers.common["Authorization"] = responseToken;
    } catch (error) {
        console.error("Authorization failed: ", error);
        localStorage.removeItem("token");
        delete axiosOrnek.defaults.headers.common["Authorization"];
    }

}