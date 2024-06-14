import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";

const GoogleLogin = () => {

    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin();
    }

    return (
        <div className="w-full">
            <button onClick={() => handleGoogleLogin()} className="btn btn-error btn-outline w-full ">Google <FcGoogle /> </button>
        </div>
    );
};

export default GoogleLogin;