import React from "react";
import { useHistory, Link } from "react-router-dom";

const Header = () => 
{
    const history = useHistory();
    const logout = () => {
        localStorage.setItem("login", "false");
        history.push("/");
        window.location.reload(false);
    };

    return(
        <>
            <nav className="navbar navbar-light bg-dark justify-content-between">
                <a href="/admin" className="navbar-brand p-3 text-light">Bukapedia Admin</a>
                <div className="p-3">
                    <Link to="/admin">
                        <a className="m-3 text-decoration-none text-light">Home</a>
                    </Link>
                    <Link to="/admin/Rekap">
                        <a className="m-3 text-decoration-none text-light">Rekap Penjualan</a>
                    </Link>
                    <button onClick={logout} className="btn btn-danger m-3">Logout</button>
                </div>
            </nav>
        </>
    );
}

export default Header;