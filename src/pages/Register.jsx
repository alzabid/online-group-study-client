import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import Container from "../components/Container";


const Register = () => {
  const { createUser, handleUpdateProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleRegister = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(photo, name, email, password);

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
        handleUpdateProfile(name, photo).then(() => {
          swal("Good job!", "You created an account successfully!", "success");
          navigate("/");
        });
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
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <div className="hero min-h-screen bg-base-100">
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
      </div>
    </Container>
  );
};

export default Register;
