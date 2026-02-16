import './App.css'
import {Route, Routes} from "react-router-dom";
import RootLayout from "./components/RootLayout.tsx";
import Profile from "./pages/Profile.tsx";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import Payments from "./pages/Payments.tsx";
import Settings from "./pages/Settings.tsx";
import withAuthentication from "./hoc/withAuthentication.hoc.tsx";

const ProtectedSettings = withAuthentication(Settings)

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path={'/profile'} element={<Profile />}>
                        <Route index element={<h2>Please select a profile</h2>}/>
                        <Route path={'details'} element={<h2>Profile Details</h2>} />
                        <Route path={'settings'} element={<ProtectedSettings />} />
                        <Route path={'payments'} element={<Payments />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
