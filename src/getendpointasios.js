import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./layout/Header";
import { useApiData } from "./Context/ApiDataContext";
const Getendpointasios = () => {
  const [user, setUsers] = useState([]);

  const { apidata } = useApiData();
  console.log("Context data:", apidata);

  return (
    <>
      <Header />
      <div className="mt-10">
        <h1 className="font-black text-center text-4xl text-white">
          Get Call Off Api
        </h1>

        <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center  mt-10 pt-10 rounded bg-white">
          <table className=" px-4 max-w-[1200px] mx-auto w-full">
            <tr className="  py-4 bg-black text-white rounded-t-xl">
              <th className="py-2  ">First Name</th>
              <th className="">Last Name</th>
              <th className="">Email</th>
              <th className="">Password</th>
              {/* <th className="">Address</th>
          <th className="">Company</th> */}
            </tr>

            {/* {apidata?.map((it , index) => {
          return (
            <tr onClick={()=>{
              setUsers([it])
            }} className={`${index==0 || index==2 || index==4?  "bg-gray-200"  : "bg-white" }   px-4`}>
              <th  className="py-4  pl-4 ">{it.firstName}</th>
              <th className="pr-4 ">{it.lastName}</th>
              <th className="">{it.age}</th>
          
            </tr>
          );
        })} */}
            {/* {apidata?.map((it, index) => {
              return ( */}
            <tr className="max-w-[1200px] mx-auto w-full"
            // key={index}
            // className={`${
            //   index === 0 || index === 2 || index === 4
            //     ? "bg-gray-200"
            //     : "bg-white"
            // } px-4`}
            >
              <td className="py-4 text-center">{apidata?.firstName}</td>
              <td className="py-4 text-center">{apidata?.lastName}</td>
              <td className="py-4 text-center">{apidata?.email}</td>
              <td className="py-4 text-center">{apidata?.password}</td>
            </tr>
            {/* );
            })} */}
          </table>
        </div>
      </div>
    </>
  );
};

export default Getendpointasios;
