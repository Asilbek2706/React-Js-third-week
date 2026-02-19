import type {ReactNode} from "react";
import {Navigate, Outlet} from "react-router-dom";

interface IProps {
    isAllowed: boolean;
    children?: ReactNode,
    redirectPath?: string
}

const ProtectedRoute = ({ isAllowed, redirectPath = '/', children }: IProps) => {
    if(!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute;