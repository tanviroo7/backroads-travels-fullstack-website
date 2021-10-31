import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    signInUsingGoogle,
    handleNameChange,
    handleEmail,
    handlePass,
    registerNewUser,
    email,
    password,
    error,
  } = useAuth();

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {});
  };

  return (
    <div>
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Sign Up</h1>
          <form
            onSubmit={() => {
              registerNewUser(email, password);
            }}
            className="mt-6"
          >
            <div className="my-5 text-sm">
              <label htmlFor="name" className="block text-black">
                Name
              </label>
              <input
                onBlur={handleNameChange}
                type="text"
                name=""
                id=""
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="email" className="block text-black">
                Email
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                autofocus
                id="username"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Email"
                required
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
            <input
              className="block text-center text-white bg-green-600 p-3 duration-300 rounded-sm hover:bg-green-700 w-full"
              type="submit"
              value="Sign up"
            />
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
            Already have an account?{" "}
            <Link to="/login" className="text-black font-medium">
              {" "}
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
