import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
const Endpointbyid = () => {
  const [iddata, setIdData] = useState([]);
  const [selectedId, setSelectedId] = useState(2); 

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${selectedId}`)
      .then(function (response) {
        setIdData([response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [selectedId]);

  return (
    <>
    <Header/>
      <div className=" ">
        <h1 className="font-black text-center text-4xl">Get Endpoint By Id </h1>
        <div className="flex max-w-[1200px] mx-auto items-center bg-black mt-10">
     
          <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center  rounded bg-white">
            <table className="px-4 max-w-[1200px] mx-auto w-full">
              <thead>
                <tr className=" py-4 bg-black text-white rounded-t-xl">
                  <th className="py-2 ">Title</th>
                  <th className="">rating</th>
                  <th className="">Price</th>
                  <th className="">DiscountPercentage</th>
                  <th className="">DiscountPercentage</th>
                </tr>
              </thead>
              <tbody>
                {iddata?.map((it, index) => {
                  return (
                    <tr
                      key={index}
                      className={`${index === 0 ? "bg-gray-200" : "bg-white"} px-4`}
                    >
                      <td className="py-4 pl-4">{it.title}</td>
                      <td className="pr-4">{it.rating}</td>
                      <td>{it.price}</td>
                      <td>{it.discountPercentage}</td>
                      <td>{it.rating}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>

          <select
            value={selectedId}
            onChange={handleIdChange}
            className=" px-2 py-1 text-white bg-transparent"
          >
            <option className="text-black" value={1}>ID 1</option>
            <option className="text-black" value={2}>ID 2</option>
            <option className="text-black" value={3}>ID 3</option>
         
          </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Endpointbyid;
