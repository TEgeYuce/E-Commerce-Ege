import { setUser } from "../actions/clientAction";
import axiosOrnek from "../../utils/axiosOrnek";
import { toast } from "react-toastify";
import { AuthService } from "../../utils/authService";

export const loginUser = ({email, password, rememberMe}) => {
    return async (dispatch) => {
        try {
            const response = await axiosOrnek.post("/login", {email, password});
            const {token, name, email: responseEmail, role_id} = response.data;
            AuthService.setAuthToken(token);
            
            dispatch(setUser({name, email: responseEmail, role_id}, [], []));
            
            toast.success(`Welcome back, ${name}!`);
            return {
                success: true,
                userData: { name, email: responseEmail, role_id, token }
            };
        } catch (error) {
            console.error("Login error:", error);
            const message = error.response?.data?.message || "Login failed";
            toast.error(message);
            return {
                success: false,
                error: message
            };
        }
    };
};

export const logoutUser = () => (dispatch) => {
    AuthService.clearAuth();
    
    dispatch(setUser(null, [], []));
    
    toast.success("You have been logged out successfully.");
};