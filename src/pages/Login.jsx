import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Good job!", "You successfully login!", "success");
        e.target.reset();
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        swal("Error!", "Invalid Email or Password !", "error");
        setLoginError("*Invalid Email or Password");
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        swal("Good job!", "You successfully login!", "success");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "password" : "text"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <span
                    className="absolute top-[170PX] right-10 link link-hover"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>

                  {loginError && (
                    <p className="text-red-700 mt-2">{loginError}</p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Login</button>
                </div>
              </form>

              <p>
                Dont have an account? Please
                <Link to="/register">
                  <button className="-ml-3 btn btn-link">Register</button>
                </Link>
              </p>
              <div className="divider ">Continue With</div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline  w-full flex justify-between items-center cursor-pointer "
              >
                Log in With Google
                <FcGoogle className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
