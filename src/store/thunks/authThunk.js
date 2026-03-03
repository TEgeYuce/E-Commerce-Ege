import { AuthService } from "../../utils/authService";
import axiosOrnek from "../../utils/axiosOrnek";
import { setUser } from "../actions/clientAction";

export const checkToken = () => async (dispatch) => {
    const token = AuthService.getToken();

    if(!token) {
        console.log("No token found, user not authenticated");
        return;
    }

    try {
        const response = await axiosOrnek.get("/verify");
        const {name, email, role_id, token: responseToken} = response.data;

        dispatch(setUser({name, email, role_id}, [], []));

        if (responseToken && responseToken !== token) {
            AuthService.setAuthToken(responseToken);
        }
        
        console.log("Token verification successful for user:", name);
    } catch (error) {
        console.error("Authorization failed: ", error);
        AuthService.clearAuth();
        dispatch(setUser(null, [], []));
    }

};