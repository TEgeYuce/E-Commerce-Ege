import { setUser } from "../actions/clientAction";
import axiosOrnek from "../../utils/axiosOrnek";

export const loginUser = ({email, password, rememberMe}) => {
    return async (dispatch) => {
        try {
            const response = await axiosOrnek.post("/login", {email, password});
            const {token, name, email: responseEmail, role_id} = response.data;
            dispatch(setUser({name, responseEmail, role_id}, [], []));

            if(rememberMe) {
                localStorage.setItem("token", token);
            }
            return {
                success: true
            };
        } catch (error) {
            console.error("Login error:", error);
            return {
                success: false
            };
        }
    };
};

export const logoutUser = () => (dispatch) => {
    dispatch(setUser(null));
    localStorage.removeItem("token");
    delete axiosOrnek.defaults.headers.common["Authorization"];
};