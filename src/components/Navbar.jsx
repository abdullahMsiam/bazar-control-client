import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { user } = useAuth();
    const photo = user?.photoURL
    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost text-xl">Bazar Controller</Link>
                    {user && <Link to={"/dashboard"} className="btn btn-warning text-xl ms-9">Dashboard</Link> || <></>
                    }
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user ?
                                <div className="flex items-center gap-2">
                                    <button className="btn btn-error btn-outline btn-sm">Logout</button>
                                    <img className="rounded-full w-10 border" src={photo} alt="" />
                                </div> :
                                <div className="flex items-center gap-2">
                                    <Link to={"/login"} className="btn btn-success btn-outline btn-sm">Login</Link>
                                    <Link to={"/register"} className="btn btn-warning btn-outline btn-sm">Sign Up</Link>
                                </div>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;