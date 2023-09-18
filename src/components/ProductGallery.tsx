import React, { useState } from "react";
import { Object1Item, object1, object2, object3 } from "../../models/Product";
import Image from "next/image";
import GalleryReadText from "./subcomponents/GalleryReadText";

export const ProductGallery: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState(28); // Initially, display 8 items

  const itemsPerLoad = 28; // Number of items to load each time the button is clicked

  const gridItems3 = object3.slice(0, 8).map((item) => (
    <div key={item.id} className="grid-item">
      <Image src={item.image} alt={item.name} />
      {item.name}
    </div>
  ));

  const gridItems1 = object1.slice(0, 7).map((item) => (
    <div key={item.id} className="productCardContainer">
      <div className="cardproduct w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="p-8 rounded-t-lg"
            src={item.image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS,
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div className="">
            <span className="text-sml font-bold text-gray-900 dark:text-white">
              $599
            </span>
          </div>
          <div>
            <button className="addToCartBtn bg-fuchsia-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  const gridItems1slice = object1.slice(7, 14).map((item) => (
    <div key={item.id} className="grid-item" style={{ width: "170px" }}>
      <Image src={item.image} alt={item.name} />
      {item.name}
    </div>
  ));

  const gridItems1slice2 = object1.slice(14, 28).map((item) => (
    <div key={item.id} className="grid-item" style={{ width: "170px" }}>
      <Image src={item.image} alt={item.name} />
      {item.name}
    </div>
  ));

  const gridItems1slice3 = object1.slice(28, itemsToShow).map((item) => (
    <div key={item.id} className="grid-item" style={{ width: "170px" }}>
      <Image src={item.image} alt={item.name} />
      {item.name}
    </div>
  ));
  const gridItems3slice = object3.slice(8, 12).map((item) => (
    <div key={item.id} className="grid-item">
      <Image src={item.image} alt={item.name} />
      {item.name}
    </div>
  ));

  const gridItems2 = object2.slice(0, 2).map((item) => (
    <div key={item.id} className="grid-item">
      <Image src={item.image} alt={item.name} />
      {item.name}
    </div>
  ));

  const gridItems2slice = object2.slice(2, 4).map((item) => (
    <div key={item.id} className="grid-item">
      <Image src={item.image} alt={item.name} />
      {item.name}
    </div>
  ));

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + itemsPerLoad);
  };

  return (
    <div className="container-fluid rounded-3xl bg-white mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-8 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {/* Your grid items */}
        {gridItems3}
        {/* Add more grid items */}
      </div>
      <p>Xiti prodaj</p>
      <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 2xl:grid-cols-7 gap-2">
        {/* Your grid items */}
        {gridItems1}
        {/* Add more grid items */}
      </div>
      ddd
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {/* Your grid items */}
        {gridItems3slice}
        {/* Add more grid items */}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 2xl:grid-cols-7 gap-4">
        {/* Your grid items */}
        {gridItems1slice}
        {/* Add more grid items */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        {/* Your grid items */}
        {gridItems2}
        {/* Add more grid items */}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 2xl:grid-cols-7 gap-4">
        {/* Your grid items */}
        {gridItems1slice2}
        {/* Add more grid items */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        {/* Your grid items */}
        {gridItems2slice}
        {/* Add more grid items */}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 2xl:grid-cols-7 gap-4">
        {/* Your grid items */}
        {gridItems1slice3}
        {/* Add more grid items */}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 2xl:grid-cols-31 gap-4">
        {/* Skip the first two columns in the lg and xl breakpoints */}
        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-start-3 xl:col-start-3 xl:col-span-3 2xl:col-span-25 flex justify-center items-center">
          <button
            onClick={loadMoreItems}
            className="bg-white border-2 border-purple-500 text-purple-500 font-semibold py-2 px-4 rounded-lg hover:bg-purple-500 hover:text-white hover:border-white transition duration-300 ease-in-out mx-auto"
          >
            Button Text
          </button>
        </div>
      </div>
      <GalleryReadText />
    </div>
  );
};
