import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    signInUsingGoogle,
    processLogin,
    handleEmail,
    handlePass,
    email,
    password,
    error,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  //  google sign
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    processLogin(email, password);
  };

  return (
    <div>
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
          <form onSubmit={handleLogin} className="mt-6">
            <div className="my-5 text-sm">
              <label htmlFor="username" className="block text-black">
                Email
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                autofocus
                id="emai"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Email"
              />
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <input
                onBlur={handlePass}
                type="password"
                id="password"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
            </div>
            <button className="block text-center text-white bg-green-600 p-3 duration-300 rounded-sm hover:bg-green-700 w-full">
              Login
            </button>
            <p className="text-red-600 mx-auto">{error}</p>
          </form>
          <div className="flex md:justify-between justify-center items-center mt-10">
            <div
              style={{ height: "1px" }}
              className="bg-gray-300 md:block hidden w-4/12"
            />
            <p className="md:mx-2 text-sm font-light text-gray-400">
              {" "}
              Login With Social{" "}
            </p>
            <div
              style={{ height: "1px" }}
              className="bg-gray-300 md:block hidden w-4/12"
            />
          </div>
          <div className=" ">
            <div>
              <button
                onClick={handleGoogleLogin}
                className="text-center w-full text-white bg-red-600 p-3 duration-300 rounded-sm hover:bg-red-700"
              >
                Google
              </button>
            </div>
          </div>
          <p className="mt-12 text-xs text-center font-light text-gray-400">
            {" "}
            Don't have an account?{" "}
            <Link to="/register" className="text-black font-medium">
              {" "}
              Create One{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
