import { Link, Outlet } from "react-router-dom"
import useAuth from "../hooks/use-auth.js"

function NavBar() {
    const {auth, setAuth} = useAuth()

    const handleLogout = () => {
        window.localStorage.removeItem("token")
        setAuth({ token: null })
    };

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/user">Create account</Link>
                {auth.token ? (
                    <>
                    <Link to="/" onClick={handleLogout}>
                        Log Out
                    </Link>
                    <Link to="/create">Create Project</Link>
                    <Link to="/pledge">Make a Pledge</Link>
                    </>
                    ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
            <Outlet />    
        </div>  
    );
}

export default NavBar