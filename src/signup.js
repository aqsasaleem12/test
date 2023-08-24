import React, { useState } from "react";
import Header from "./layout/Header";
import { useApiData } from "./Context/ApiDataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const { apidata, setApiData } = useApiData(); // Using the context hook
  const navigate = useNavigate();
  console.log(apidata, "//////////******");
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = async (e) => {
    e.preventDefault();
    setSignupData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });

    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method:"post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: signupData.firstName,
          lastName: signupData.lastName,
          email: signupData.email,
          password: signupData.password
        })
      });
      if (response.ok) {
        const responseData = await response.json();
        setApiData([...apidata,responseData]);
        navigate("/");
      } else {
        console.error("Failed to fetch:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const changeHandler = (name, value) => {
    let temp = structuredClone(signupData);
    temp[name] = value;
    setSignupData(temp);
  };
  return (
    <>
      <Header />

      <form onSubmit={(e) => handleChange(e)} className="max-w-[500px] mx-auto">
        <h1 className="text-5xl text-gray-200 font-bold text-center pt-10">
          Sign Up Form
        </h1>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">First Name</lable>
            <input
              value={signupData.firstName}
              onChange={(e) => changeHandler("firstName", e.target.value)}
              type="type"
              placeholder="First Name"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">Last Name</lable>
            <input
              value={signupData.lastName}
              onChange={(e) => changeHandler("lastName", e.target.value)}
              type="text"
              placeholder="Last Name"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">Email</lable>
            <input
              value={signupData.email}
              onChange={(e) => changeHandler("email", e.target.value)}
              type="email"
              placeholder="Type Email Here"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">Password</lable>
            <input
              value={signupData.password}
              onChange={(e) => changeHandler("password", e.target.value)}
              type="Password"
              placeholder="password"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          {/* <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">Password</lable>
            <input
              value={signupData.password}
              onChange={(e) => changeHandler("password", e.target.value)}
              type="type"
              placeholder="title"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div> */}

          <button
            type="submit"
            className="border border-gray-400  px-4  py-2 max-w-[200px] w-full rounded text-gray-400 hover:bg-gray-900 "
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
