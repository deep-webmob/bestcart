import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState({
    email_message: null,
    password_message: null,
  });

  const data = localStorage.getItem("UserFormData");
  const loginData = JSON.parse(data);

  const checkEmail = (e) => {
    if (e.target.value === loginData.email) {
      setMessage({
        ...message,
        email_message: false,
      });
    } else {
      setMessage({
        ...message,
        email_message: true,
      });
    }
  };

  const checkPassword = (e) => {
    if (e.target.value === loginData.password) {
      setMessage({
        ...message,
        password_message: false,
      });
    } else {
      setMessage({
        ...message,
        password_message: true,
      });
    }
  };

  const handleLogin = (e) => {
    // e.preventDefault();
    console.log();
    if (
      message.email_message ||
      message.password_message === true ||
      message.email_message === null ||
      message.password_message === null
    ) {
      alert("please enter valid login details");
      console.log("Invalid details");
    } else {
      console.log("valid details.");
      navigate("/");
    }
  };

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
              onChange={(e) => checkEmail(e)}
            />
            {message.email_message === true && (
              <label
                className="text-red-800 text-sm mt-1
            "
              >
                Please enter valid email
              </label>
            )}
          </div>

          <div className="grid mt-10">
            <label>Password: </label>
            <input
              type={"password"}
              placeholder="Enter Password"
              className="h-min rounded p-2 w-72 bg-slate-50 focus-visible:outline-none"
              onChange={(e) => checkPassword(e)}
            />
            {message.password_message === true && (
              <label
                className="text-red-800 text-sm mt-1
            "
              >
                Please enter valid password
              </label>
            )}
          </div>

          <div className="grid bg-slate-50 mt-12 rounded">
            <button
              type="submit"
              className="py-2 focus:bg-slate-200 rounded"
              onClick={handleLogin}
            >
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
