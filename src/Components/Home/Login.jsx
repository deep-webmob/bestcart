import React from "react";

const Login = () => {
  return (
    <div>
      <form className="h-screen grid justify-center content-center">
        <div className="bg-slate-400 pt-8 p-10 rounded">
          <div>
            <div className="text-center text-2xl">Login</div>
          </div>

          <div className="grid mt-6">
            <label>Email: </label>
            <input
              type={"email"}
              placeholder="Enter email"
              className="h-min rounded p-2 w-72 bg-slate-50 focus-visible:outline-none"
            />
          </div>

          <div className="grid mt-10">
            <label>Password: </label>
            <input
              type={"password"}
              placeholder="Enter Password"
              className="h-min rounded p-2 w-72 bg-slate-50 focus-visible:outline-none"
            />
          </div>
          <div className="grid bg-slate-50 mt-12 rounded">
            <button type="submit" className="py-2 focus:bg-slate-200 rounded">
              Login
            </button>
          </div>

          <div className="grid justify-end mt-3">
            <a className="text-blue-700" href="/signup">
              <small>New user? SignUp here</small>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
