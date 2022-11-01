import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

const baseUrl = "http://127.0.0.1:8000/register";

function Signup() {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userData);

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(userData));
    if (formErrors) {
      Swal.fire("error", "Something went wrong!");
    }

    Axios.post(baseUrl, {
      first_name: userData.first_name,
      last_name: userData.last_name,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      password2: userData.password2,
    }).then((response) => {
      console.log(response.data);
      navigate("/login");
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userData);
    }
  }, [formErrors]);

  const validate = (values) => {
    console.log("validating");
    const errors = {};
    if (!values.first_name) {
      console.log("ASDFSAD");
      errors.first_name = "First name is required";

      console.log(errors.first_name, "oooooo");
    }
    if (!values.last_name) {
      errors.last_name = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email  is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.password.length < 4) {
      errors.password = "Password length more than 4 characters";
    }
    if (values.password !== values.password2) {
      errors.password2 = "Confrim password does not match";
    }
    return errors;
  };

  return (
    <div>
      <div className="relative  flex-col justify-center min-h-screen overflow-hidden grid  sm:grid-cols-1">
        <div className="p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
            Sign UP
          </h1>
          <form className="mt-6 text-left ">
            <div className="">
              <div className="  justify-around grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-2">
                  <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800 "
                  >
                    Firstname
                  </label>

                  <input
                    type="text"
                    name="first_name"
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <p className="text-red-600">{formErrors.first_name}</p>
                </div>

                <div className="mb-2">
                  <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Lastname
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="last_name"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <p className="text-red-600">{formErrors.last_name}</p>
                </div>
              </div>
              <div className="mb-2  justify-around grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-2">
                  <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="username"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <p className="text-red-600">{formErrors.username}</p>
                </div>

                <div className="mb-2">
                  <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <p className="text-red-600">{formErrors.email}</p>
                </div>
              </div>
              <div className="mb-2  justify-around grid sm:grid-cols-1 md:grid-cols-2'">
                <div>
                  <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <p className="text-red-600">{formErrors.password}</p>
                </div>

                <div>
                  <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password2"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <p className="text-red-600">{formErrors.password2}</p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={submitForm}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Signup
                </button>
              </div>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <Link
              to="/"
              className="font-medium text-indigo-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
