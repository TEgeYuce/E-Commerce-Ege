import { Redirect, Route } from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({children, ...rest}) => {
    const user = useSelector((state) => state.client.user);

    return(
        <Route 
            {...rest}
            render={({location}) =>
                user ? (
                children
            ) : (
                <Redirect to={{pathname: "/login", state: {from: location}}} />
            )
            }
        />
    );
};

export default PrivateRoute;