import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
const Pagenation = () => {
     
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
        const ItemPerPage = 10
  console.log(data , "daaaaaaaaaattttttttttaaaaaaaaaaaa")
        useEffect(()=>{
            axios.get("https://api-v2.tailwinduikit.com/categories/skip/0/take/10" , {
                
            }).then(function(response){
                setData(response.data)
                setTotalPages(Math.round(response.data.lenght/ItemPerPage));
            })
        } ,[])  ;

  return (
    <div>
      sdsfdf
    </div>
  )
}

export default Pagenation
