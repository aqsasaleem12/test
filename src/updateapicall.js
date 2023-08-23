import React, { useState } from "react";
import Header from "./layout/Header";
import axios from "axios";

const Updateapicall = () => {
  const [update, setUpdate] = useState({});
  console.log(update, "kjsddhhcjncusdhjccbhs");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLast] = useState("");
  const [age, setAge] = useState("");

  const apiUrl = "https://dummyjson.com/users/1";

  const handleUpdate = (e) => {
    e.preventDefault();

    const dataUpdate = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    axios
      .patch(apiUrl, dataUpdate)
      .then((response) => {
        setUpdate(response.data);
        console.log("Update successful:", response.data);
      })
      .catch((error) => {
        console.log("Error updating user:", error);
      });
  };

  return (
    <>
      <Header />

      <form className="max-w-[600px] mx-auto" onSubmit={handleUpdate}>
        <h1 className="text-5xl text-gray-200 font-bold text-center pt-10">
          Update/Patch Call of Api
        </h1>
        <div className="flex flex-col gap-4 mt-10">
          <div className="w-full flex flex-col gap-3">
            <label className="block text-gray-200 text-xl">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[600px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <label className="block text-gray-200 text-xl">Last Name</label>
            <input
              type="text"
              placeholder=" Last Nmae "
              value={lastName}
              onChange={(e) => setLast(e.target.value)}
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[600px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label className="block text-gray-200 text-xl">Age</label>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[600px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>

          <button
            type="submit"
            className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[600px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default Updateapicall;
