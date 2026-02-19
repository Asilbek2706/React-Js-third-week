import {Link, Outlet} from "react-router-dom";

function RootLayout() {

    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to={'/profile/settings'}>Settings</Link>
                <Link to={'/profile/payments'}>Payments</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default RootLayout