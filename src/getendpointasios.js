import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./layout/Header";
const Getendpointasios = () => {
  const [user, setUsers] = useState([]);
  console.log(user, "apidata----------");
  useEffect(() => {
    axios

      .get("https://jsonplaceholder.typicode.com/users/", {})
      .then(function (response) {
        console.log(response);
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
     <>
     <Header/>
     <div className="">
    <h1 className="font-black text-center text-4xl ">
       Get Call Off Api 
    </h1>

    <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center pt-10 rounded bg-white">
      <table className=" px-4 max-w-[1200px] mx-auto w-full">
        <tr className="-b  py-4 bg-black text-white rounded-t-xl">
          <th className="py-2  ">Name</th>
          <th className="">Email</th>
          <th className="">Phone</th>
          <th className="">Address</th>
          <th className="">Company</th>
        </tr>

        {user?.map((it , index) => {
          return (
            <tr onClick={()=>{
              setUsers([it])
            }} className={`${index==0 || index==2 || index==4?  "bg-gray-200"  : "bg-white" }   px-4`}>
              <th  className="py-4  pl-4 ">{it.name}</th>
              <th className="pr-4 ">{it.email}</th>
              <th className="">{it.phone}</th>
              <th className="">{it.address.city}</th>
              <th>{it.website}</th>
            </tr>
          );
        })}
      </table>
    </div>
     </div>
     
     </>
  );
};

export default Getendpointasios;
