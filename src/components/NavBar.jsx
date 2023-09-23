import { Link, Outlet } from "react-router-dom"
import useAuth from "../hooks/use-auth.js"
import "./NavBar.css"

function NavBar() {
    const {auth, setAuth} = useAuth()

    const handleLogout = () => {
        window.localStorage.removeItem("token")
        setAuth({ token: null })
    };

    return (
        <div>
            <img src="/src/assets/images/Pennies_for_Pawsitivity_Logo_White_Background_Dark_Blue.png" alt="logo" class="nav-logo"></img>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT US</Link>
                <Link to="/user">CREATE ACCOUNT</Link>
                {auth.token ? (
                    <>
                    <Link to="/" onClick={handleLogout}>
                        LOG OUT
                    </Link>
                    <Link to="/create">CREATE PROJECT</Link>
                    <Link to="/edit">EDIT A PROJECT</Link>
                    <Link to="/delete">DELETE PROJECT</Link>
                    <Link to="/pledge">MAKE A PLEDGE</Link>
                    <Link to="/delete">DELETE A PLEDGE</Link>
                    </>
                    ) : (
                    <Link to="/login">LOGIN</Link>
                )}
            </nav>
            <Outlet />    
        </div>  
    );
}

export default NavBar