import React, { useState } from "react";
import Header from "./layout/Header";
import axios from "axios";

const Signup = () => {
  const [apidata, setApiData] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(apidata, "aaaaaaaaaaaapppppppppppiiiiiiiiiiiiiii");
  console.log(fname, "fname");
  console.log(lname, "llllnnmma");
  console.log(email, "eeeeeeeemmmmmmail");
  console.log(password, "passssqw");





  
  const handleChange = (event) => {
    event.preventDefault();
    axios
      .post("https://dummy.restapiexample.com/api/v1/create", {
        fname: fname,
        lname: lname,
        email: email,
        password: password
      })
      .then(function (response) {
        setApiData(response);
        setFname("");
        setLname("");
        setEmail("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Header />

      <form onSubmit={handleChange} className="max-w-[500px] mx-auto">
        <h1 className="text-5xl text-gray-200 font-bold text-center pt-10">
          Sign Up
        </h1>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">First Name</lable>
            <input
              value={fname}
              onChange={(event) => setFname(event.target.value)}
              type="type"
              placeholder="FIRST NAME"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">Last Name</lable>
            <input
              value={lname}
              onChange={(event) => setLname(event.target.value)}
              type="type"
              placeholder="LAST NAME"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">Email</lable>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="email#gmail.com"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3 ">
            <lable className="block text-gray-200 text-xl ">Password</lable>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="##########"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <button
            type="submit"
            className="border border-gray-400  px-4  py-2 max-w-[200px] w-full rounded text-gray-400 hover:bg-gray-900 "
          >
            Signup
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
