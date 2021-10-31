import React from "react";
import "./Header.css";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      {/* header */}
      <header id="home">
        {/* navbar */}
        <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-green-400 to-blue-500 ... p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="  tracking-tight text-2xl p-1 bg-green-600 hover:bg-green-600 cursor-pointer bg-opacity-75 rounded-lg font-extrabold text-white">
              <span className="text-black">Backroads</span>Travels
            </span>
          </div>

          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <Link
                to="/home"
                class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
              >
                Home
              </Link>
              <Link
                to="/services"
                class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
              >
                Gallery
              </Link>
              {user.email && (
                <span>
                  <Link
                    to="/addService"
                    class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
                  >
                    Add Service
                  </Link>
                  <Link
                    to="/manageOrders"
                    class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
                  >
                    Manage Orders
                  </Link>
                  <Link
                    to="/myOrders"
                    class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
                  >
                    My Orders
                  </Link>
                </span>
              )}
            </div>
            {user.email && (
              <span className="text-black md:mr-8 md:mt-4 font-semibold">
                Hello, {user.displayName || user.email}{" "}
              </span>
            )}
            <div>
              {user.email ? (
                <Link
                  to="/home"
                  onClick={logOut}
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Log Out
                </Link>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0 mr-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      {/* end of header */}
    </div>
  );
};

export default Header;
