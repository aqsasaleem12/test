import React, { useState } from "react";
import Header from "./layout/Header";
import axios from "axios";

const Product = () => {
  const [apidata, setApiData] = useState();
  const [productData, setProductData] = useState({
    id: 0,
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: []
  });

  // console.log(productData.id,"id")
  // console.log(productData.title,"title")
  // console.log(productData.description,"description")
  console.log(apidata, "apidata");

  const handleChange = (event) => {
    event.preventDefault();
    setProductData({
      id: 0,
      title: "",
      description: "",
      price: "",
      discountPercentage: "",
      rating: "",
      stock: "",
      brand: "",
      category: "",
      thumbnail: "",
      images: []
    });
    // axios
    //   .post("https://dummyjson.com/posts", {
    //     // id: productData.id,
    //     // title: productData.title,
    //     // description: productData.description,
    //     // price: productData.price,
    //     // discountPercentage: productData.discountPercentage,
    //     // rating: productData.rating,
    //     // stock: productData.stock,
    //     // brand: productData.brand,
    //     // category: productData.category,
    //     // thumbnail: productData.thumbnail,
    //     // images: productData.images
    //     title: 'I am in love with someone.',
    // userId: 5,
    //   })
    //   .then(function (response) {
    //     setApiData(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        userId: productData.id,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        discountPercentage: productData.discountPercentage,
        rating: productData.rating,
        stock: productData.stock,
        brand: productData.brand,
        category: productData.category,
        thumbnail: productData.thumbnail,
        /* other post data */
      })
    })
    .then(res => 
      setApiData(res)
    )

    .then(console.log);
  };

  const changeHandler = (name, value) => {
    let temp = structuredClone(productData);
    temp[name] = value;
    setProductData(temp);
  };

  return (
    <>
      <Header />

      <form onSubmit={(e) => handleChange(e)} className="max-w-[500px] mx-auto">
        <h1 className="text-5xl text-gray-200 font-bold text-center pt-10">
      Create Product
        </h1>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">Product ID</lable>
            <input
              value={productData.id}
              onChange={(e) => changeHandler("id", e.target.value)}
              type="type"
              placeholder="FIRST NAME"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">
              Product Title
            </lable>
            <input
              value={productData.title}
              onChange={(e) => changeHandler("title", e.target.value)}
              type="type"
              placeholder="title"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">
              Product Description
            </lable>
            <input
              value={productData.description}
              onChange={(e) => changeHandler("description", e.target.value)}
              type="type"
              placeholder="title"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">
              Product price
            </lable>
            <input
              value={productData.price}
              onChange={(e) => changeHandler("price", e.target.value)}
              type="type"
              placeholder="title"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">
              Product discountPercentage
            </lable>
            <input
              value={productData.discountPercentage}
              onChange={(e) =>
                changeHandler("discountPercentage", e.target.value)
              }
              type="type"
              placeholder="title"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <lable className="block text-gray-200 text-xl ">
              Product rating
            </lable>
            <input
              value={productData.rating}
              onChange={(e) => changeHandler("rating", e.target.value)}
              type="type"
              placeholder="title"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
            />
          </div>

          <button
            type="submit"
            className="border border-gray-400  px-4  py-2 max-w-[200px] w-full rounded text-gray-400 hover:bg-gray-900 "
          >
            Add Product
          </button>
        </div>
      </form>
    </>
  );
};

export default Product;
