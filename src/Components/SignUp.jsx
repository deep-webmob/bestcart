import React, { useState } from "react";

const SignUp = () => {
  const [message, setMessage] = useState({
    password_message: false,
    email_message: false,
    confirm_password_message: false,
  });
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });


  const changeUserName = (e) => {
    setData({
      ...data,
      username: e.target.value,
    });
  };

  const changeEmail = (e) => {
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(e.target.value)) {
      setData({
        ...data,
        email: e.target.value,
      });
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

  const changePassword = (e) => {
    const filter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    console.log(filter.test(e.target.value));
    if (filter.test(e.target.value)) {
      setData({
        ...data,
        password: e.target.value,
      });

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

  const confirmPassword = (e) => {
    if (e.target.value === data.password) {
      setData({
        ...data,
        confirm_password: e.target.value,
      });

      setMessage({
        ...message,
        confirm_password_message: false,
      });
    } else {
      setMessage({
        ...message,
        confirm_password_message: true,
      });
    }
  };

  const SendData = async (e) => {
    localStorage.setItem("UserFormData", JSON.stringify(data));

    await fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    
    if (
      !message.email_message ||
      !message.confirm_password ||
      !message.confirm_password_message
    ) {
      // await fetch("https://jsonplaceholder.typicode.com/posts", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: { "Content-type": "applcation/json; charset='UTF-8'" },
      // })
      //   .then((response) => response)
      //   .then();
    }
  };
  return (
    <div>
      <form className="h-screen grid justify-center content-center">
        <div className="bg-slate-400 pt-8 p-10 rounded">
          <div>
            <div className="text-center text-2xl">Sign Up</div>
          </div>
          <div className="grid mt-6">
            <label>Username: </label>
            <input
              placeholder="Enter Username"
              className="h-min rounded p-2 w-72 bg-slate-50 focus-visible:outline-none"
              onChange={(e) => changeUserName(e)}
            />
          </div>

          <div className="grid mt-6">
            <label>Email: </label>
            <input
              type={"email"}
              placeholder="Enter email"
              className="h-min rounded p-2 w-72 bg-slate-50 focus-visible:outline-none"
              onChange={(e) => changeEmail(e)}
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
          <div className="grid mt-6">
            <label>Password: </label>
            <input
              type={"password"}
              placeholder="Enter password"
              className="h-min rounded p-2 w-72 bg-slate-50 focus-visible:outline-none"
              onChange={(e) => changePassword(e)}
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

          <div className="grid mt-6">
            <label>Confirm Password: </label>
            <input
              type={"password"}
              placeholder="Retype Password"
              className="h-min rounded p-2 w-72 bg-slate-50 focus-visible:outline-none"
              onChange={(e) => confirmPassword(e)}
            />
          </div>
          {message.confirm_password_message === true && (
            <label
              className="text-red-800 text-sm mt-1
            "
            >
              Passwords do not match
            </label>
          )}
          <div className="grid bg-slate-50 mt-12 rounded">
            <button
              type="submit"
              className="py-2 focus:bg-slate-200 rounded"
              onClick={SendData}
            >
              Sign Up
            </button>
          </div>

          <div className="grid justify-end mt-3">
            <a className="text-blue-700" href="/login">
              <small>Already a user? Login here</small>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
