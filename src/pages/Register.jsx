import GoogleLogin from "../components/GoogleLogin";

const Register = () => {
    return (
        <div>
            <div className="hero bg-white">
                <div className="hero-content flex-col ">
                    <h1 className="text-3xl">Login Now</h1>
                    <div className="card shrink-0 w-full md:w-[600px] shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline bg-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="card-body -mt-7">
                            <GoogleLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;