import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./layout/Header";
import { useApiData } from "./Context/ApiDataContext";
const Getendpointasios = () => {
  const [editab, setEditabla] = useState({
    name: false,
    lastname: false,
    email: false
  });

  const { apidata, setApiData } = useApiData();
  console.log("Context data:", apidata);
  console.log(editab, "editab");
  const api = (e) => {
    if (e === undefined) return;
    let element = "";
    for (let index = 0; index < e.length; index++) {
      element += "*";
    }
    return element;
  };
  const handleClick = () => {
    setEditabla({
      name: true,
      lastname: true,
      email: true
    });
  };
  const handleClick2 = () => {
    setEditabla({
      name: false,
      lastname: false,
      email: false
    });
  };

  function deleteusers(id) {
    console.log(id, "********");
    let filteredArr = apidata.filter((it) => {
      if (it.id !== id) {
        return it;
      }
    });
    setApiData([...filteredArr]);
    // axios
    //   .delete(`https://dummyjson.com/users/${id}`)

    //   .then((response) => {
    //     console.log("Delete successful:", response.data);
    //     // setApiData(response);
    //   })
    //   .catch((error) => {
    //     console.log("Error updating user:", error);
    //   });
  }
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
              <th className="">edit</th>
              {/* <th className="">Address</th>
          <th className="">Company</th> */}
            </tr>

            {apidata?.map((it, index) => {
              if (!apidata.length) return;
              return (
                <tr
                  className={`${
                    index == 0 || index == 2 || index == 4
                      ? "bg-gray-200"
                      : "bg-white"
                  }   px-4`}
                >
                  <td
                    // contentEditable={editab.name}
                    className="py-4 text-center"
                  >
                    {it.firstName}{" "}
                  </td>
                  <td
                    // contentEditable={editab.name}
                    className="py-4 text-center"
                  >
                    {" "}
                    {it.lastName}
                  </td>
                  <td
                    // contentEditable={editab.name}
                    className="py-4 text-center"
                  >
                    {" "}
                    {it.email}
                  </td>
                  <td
                    contentEditable={editab.name}
                    className="py-4 text-center"
                  >
                    {api(it.password)}{" "}
                  </td>
                  {editab.name === false ? (
                    <td className="py-4 text-center mx-auto flex justify-center gap-3 items-center">
                      <svg
                        onClick={handleClick}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        height={20}
                        width={20}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>

                      <button
                        onClick={() => deleteusers(it?.id)}
                        className="  text-red-600 text-lg font-medium flex justify-end items-end text-center"
                      >
                        Delete
                      </button>
                    </td>
                  ) : (
                    <td
                      className="py-4 text-center mx-auto"
                      onClick={handleClick2}
                    >
                      Update
                    </td>
                  )}
                </tr>
              );
            })}
            {/* {apidata?.map((it, index) => {
              return ( */}

            {/* {
              <tr
                className="max-w-[1200px] mx-auto w-full"
                // key={index}
                // className={`${
                //   index === 0 || index === 2 || index === 4
                //     ? "bg-gray-200"
                //     : "bg-white"
                // } px-4`}
              >
                <td contentEditable={editab.name} className="py-4 text-center">
                  {apidata?.firstName}
                </td>
                <td
                  contentEditable={editab.lastname}
                  className="py-4 text-center"
                >
                  {apidata?.lastName}
                </td>
                <td contentEditable={editab.email} className="py-4 text-center">
                  {apidata?.email}
                </td>
                <td className="py-4 text-center">{api(apidata.password)}</td>
                {editab.name === false ? (
                  <td className="py-4 text-center mx-auto">
                    <svg
                      className="mx-auto"
                      onClick={handleClick}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      height={20}
                      width={20}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    <button
                      onClick={() => deleteusers(apidata?.id)}
                      className=" text-red-600 text-lg font-medium flex justify-end items-end text-right"
                    >
                      Delete
                    </button>
                  </td>
                ) : (
                  <td
                    className="py-4 text-center mx-auto"
                    onClick={handleClick2}
                  >
                    Update
                  </td>
                )}
              </tr>
            } */}

            {/* );
            })} */}
          </table>
        </div>
      </div>
    </>
  );
};

export default Getendpointasios;
