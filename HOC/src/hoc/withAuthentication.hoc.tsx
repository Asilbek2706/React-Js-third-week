import {type FC, type ReactNode, useEffect} from "react";
import {useNavigate} from 'react-router-dom';


type WithAuthenticationFn = (Component: FC) => FC;

const withAuthentication: WithAuthenticationFn = (Component: FC) => {
    const Authenticated: FC = (): ReactNode | null => {
        const isAuthenticated = true;
        const navigate = useNavigate();

        useEffect(() => {
            if (!isAuthenticated) {
                navigate('/login')
            }
        }, [isAuthenticated, navigate]);

        return isAuthenticated ? <Component /> : null
    };

    return Authenticated;
}

export default withAuthentication;