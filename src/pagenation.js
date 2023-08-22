import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Header from "./layout/Header";
const Pagenation = () => {
  const [paginatedData, setPaginatedData] = useState([]);
  console.log(paginatedData.length,"vvvv")
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  console.log(totalPages,"totalPages")

  const id = 1;
  // console.log(data, "daaaaaaaaaattttttttttaaaaaaaaaaaa");
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`, {})
      .then(function (response) {
        console.log(response, "resssssssssssss");
        setPaginatedData(response?.data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  const ItemPerPage = 5;
  
  // Calculate total pages based on the length of paginatedData after it's updated
  useEffect(() => {
    if (paginatedData && paginatedData.length > 0) {
      setTotalPages(Math.ceil(paginatedData.length / ItemPerPage));
    }
  }, [paginatedData]);
  
  // ... rest of your component logic
  

 
  const StartPage = currentPage * ItemPerPage;
  const endPage = StartPage + ItemPerPage;
  const subset = paginatedData.slice(StartPage, endPage);

  const handlePage = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <Header />
      <h1 className="text-5xl font-bold text-center mt-10 text-white">Pagination</h1>
      <div className="text-white justify-between  max-w-[1224px] w-full mx-auto  gap-5 flex ">
        {subset.map((it, index) => (
          <div key={index}>
            <div className="text-center mt-5 border border-gray-900 rounded px-4 py-4">
             
              <div className="text-center">
              {it.userId}
                </div>
                <div>
                {it.title}
                </div>
              <div>
              {it.body}
                </div>
            </div>
          </div>
        ))}
       
      </div>
      <ReactPaginate
          className="flex max-w-[500px] w-[full] text-white justify-between mx-auto mt-20"
          pageCount={totalPages}
          onPageChange={handlePage}
          forcePage={currentPage}
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          containerClassName={"pagination-container"}
          activeClassName={"active-page"}
        />
    </>
  );
};

export default Pagenation;
