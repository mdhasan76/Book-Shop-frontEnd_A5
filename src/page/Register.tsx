import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleRegister = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(email, password, name);
  };

  return (
    <div className="hero bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  my-10">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label">
              <p className="text-sm">
                already have account?
                <Link to={"/login"} className="label-text-alt link link-hover">
                  {" "}
                  login{" "}
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="mt-2 px-3 py-2 bg-slate-300 text-[#003a6c] hover:bg-[#0b3962] hover:text-white duration-500   font-semibold">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
