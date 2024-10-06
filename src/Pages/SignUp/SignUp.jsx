import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm  shadow-2xl w-1/2">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-5xl font-bold">Sign UP now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="my-4 text-center">
              New To Car Doctors??{" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
