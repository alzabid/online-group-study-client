import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiEnvelope, BiKey } from "react-icons/bi";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import Container from "../components/Container";
import Title from "../components/Title";
import loginAnimation from "../assets/loginAnimation.json";
import Lottie from "lottie-react";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        swal("Good job!", "You successfully login!", "success");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        swal("Error!", "Invalid Email or Password !", "error");
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        swal("Good job!", "You successfully login!", "success");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      {/* <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-200">
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
      </div> */}
      <div className=" bg-[url(/img/bg.png)] bg-contain ">
        <div className=" bg-white bg-opacity-90 min-h-screen">
          <div className="w-11/12 mx-auto py-10 m-5 p-5  ">
            <div className="title mt-5">
              <Title>Login Now</Title>
            </div>

            <div className="flex flex-col  justify-between items-center gap-5 pt-8 lg:flex-row">
              <div className="login-for flex-1">
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col gap-8 p-5 backdrop-blur-sm bg-white  bg-opacity-5 shadow-lg rounded-lg"
                >
                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiEnvelope className="text-3xl text-slate-500"></BiEnvelope>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="email"
                      name="email"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-start items-center">
                      <div className="">
                        <BiKey className="text-3xl text-slate-500"></BiKey>
                      </div>
                      <input
                        className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                        type={showPassword ? "password" : "text"}
                        name="password"
                        placeholder="Enter Password"
                      />
                      <span
                        className="absolute top-[108PX] right-10 link link-hover"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <FaEyeSlash></FaEyeSlash>
                        ) : (
                          <FaEye></FaEye>
                        )}
                      </span>
                    </div>
                    <p className="text-end text-[13px] text-slate-500">
                      forgot password?
                    </p>
                  </div>

                  <div className=" p-1 flex gap-3 -mt-4">
                    <input type="checkbox" name="remember me" className="" />
                    Remember Me
                  </div>

                  <input
                    type="submit"
                    value="Login Now"
                    className="btn btn-outline cursor-pointer"
                  />
                </form>
                <div className="divider ">Continue With</div>
                <div className="px-5">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline  w-full flex justify-between items-center cursor-pointer "
                  >
                    Log in With Google
                    <FcGoogle className="w-8 h-8" />
                  </button>
                </div>
              </div>
              {/* <Social></Social> */}
              <div className="lottie  flex-1 mx-20">
                <Lottie animationData={loginAnimation} loop={true}></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
