import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../features/user/user_slice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const [register, setRegister] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(createUser(register));
    console.log(result);
    if (result.meta["requestStatus"] === "fulfilled") navigate("/signup");
    else {
      setError(result.payload.data.message);
    }
  };

  return (
    <div className=" space-y-5 w-full">
      <h2 className="text-center text-white text-xl"> REGISTER HERE</h2>
      <form
        action=""
        className="flex flex-col gap-6 w-5/6 md:w-96 lg:w-2/5 mx-auto  p-8 rounded-xl h-5/6 shadow-2xl bg-white"
        onSubmit={handleSubmit}
      >
        {error && <span>{error}</span>}
        <div className="flex flex-col space-y-3">
          <label htmlFor="" className="text-gray-600">
            First name
          </label>
          <input
            type="text"
            name="first_name"
            id=""
            onChange={handleChange}
            className="border w-full px-3 h-10 bg-gray-100 focus:outline-none hover:shadow-md hover:rounded-md focus:bg-white transition-all duration-200"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="" className="text-gray-600">
            Last name
          </label>
          <input
            type="text"
            name="second_name"
            id=""
            onChange={handleChange}
            className="border w-full px-3 h-10 bg-gray-100 focus:outline-none hover:shadow-md hover:rounded-md focus:bg-white transition-all duration-200"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="" className="text-gray-600">
            {" "}
            Email{" "}
          </label>
          <input
            type="email"
            name="email"
            id=""
            onChange={handleChange}
            className="border w-full px-3 h-10 bg-gray-100 focus:outline-none hover:shadow-md hover:rounded-md focus:bg-white transition-all duration-200"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="" className="text-gray-600">
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            id=""
            onChange={handleChange}
            className="border w-full px-3 h-10 bg-gray-100 focus:outline-none hover:shadow-md hover:rounded-md focus:bg-white transition-all duration-200"
          />
        </div>

        <input
          type="submit"
          value="Submit"
          className="px-7 rounded-md py-2 w-min text-slate-50 bg-gradient-to-br from-fuchsia-500 to-violet-700 hover:shadow-md transition-all duration-200"
        />
      </form>
    </div>
  );
};

export default SignUp;
