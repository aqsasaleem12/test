import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Header from "./layout/Header";
const Pagenation = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const ItemPerPage = 5;
  const id = 1;
  console.log(data, "daaaaaaaaaattttttttttaaaaaaaaaaaa");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {})
      .then(function (response) {
        setData(response.data);
        setTotalPages(Math.ceil(response.data.lenght / ItemPerPage));
      });
  }, []);
 console.log(data)
 
  const StartPage = currentPage * ItemPerPage;
  const endPage = StartPage + ItemPerPage;
  const subset = data.slice(StartPage, endPage);

  const handlePage = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <Header />
      <h1 className="text-5xl font-bold text-center mt-10">Pagenation</h1>
      <div>
        {subset.map((it, index) => (
          <div key={it.id}>
            <div className="text-center mt-5">
              {it.title}
              {it.body}
            </div>
          </div>
        ))}
        <ReactPaginate
          className="flex max-w-[500px] w-[full] justify-between mx-auto mt-20"
          pageCount={totalPages}
          onPageChange={handlePage}
          forcePage={currentPage}
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={15}
          containerClassName={"pagination-container"}
          activeClassName={"active-page"}
        />
      </div>
    </>
  );
};

export default Pagenation;
