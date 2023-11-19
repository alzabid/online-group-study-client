import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import Container from "../components/Container";
import Title from "../components/Title";
import happy from "../assets/happy.json";
import Lottie from "lottie-react";
import { BiEnvelope, BiImageAdd, BiKey, BiUser } from "react-icons/bi";

const Register = () => {
  const { createUser, handleUpdateProfile, signInWithGoogle, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleRegister = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("password should 6 character");
      return;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])/.test(password)
    ) {
      setRegisterError(
        "At least one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdateProfile(name, photo)
          .then(() => {
            e.target.reset();
            swal(
              "Good job!",
              "You created an account successfully!",
              "success"
            );
            logOut()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => console.error(error));
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        setRegisterError(error.message);
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
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-200">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    required
                  />
                  <span
                    className="absolute top-[338PX] right-12 link link-hover"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                {registerError && (
                  <p className="text-red-700 mt-2 ">{registerError}</p>
                )}
                <div className="form-control mt-5">
                  <button className="btn btn-accent">Register</button>
                </div>
              </form>

              <p>
                Already have an account? Please
                <Link to="/login">
                  <button className=" -ml-3 btn btn-link">Login</button>
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
      <div className=" bg-[url(img/bg.png)] bg-contain">
        <div className=" bg-white bg-opacity-90 min-h-screen">
          <div className="w-11/12 mx-auto py-10 m-5 p-5 ">
            <div className="title mt-5">
              <Title>Join with Us</Title>
            </div>

            <div className="flex flex-col justify-between items-center gap-5 pt-8 lg:flex-row">
              <div className="login-for flex-1">
                <form
                  onSubmit={handleRegister}
                  className="flex flex-col gap-8 p-5 backdrop-blur-sm bg-white bg-opacity-5 shadow-lg rounded-lg"
                >
                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiUser className="text-3xl text-slate-500"></BiUser>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="text"
                      name="name"
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiImageAdd className="text-3xl text-slate-500"></BiImageAdd>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="text"
                      name="photo"
                      placeholder="Enter Image Url"
                    />
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiEnvelope className="text-3xl text-slate-500"></BiEnvelope>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                    />
                  </div>

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
                      className="absolute top-[255PX] right-12 link link-hover"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>
                  <div className=" p-1 flex gap-3 -mt-4">
                    {registerError && (
                      <p className="text-red-700 ">{registerError}</p>
                    )}
                  </div>

                  {/* <div className="flex justify-start items-center">
                  <div className="">
                    <BiKey className="text-3xl text-slate-500"></BiKey>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="password"
                    name="pass-confirm"
                    placeholder="Confirm Password"
                  />
                </div> */}

                  <input
                    type="submit"
                    value="Register Now"
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
              <div className="lottie flex-1 flex mx-20 ">
                <Lottie animationData={happy}></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
