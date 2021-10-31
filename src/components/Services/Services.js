import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://infinite-springs-03391.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-gray-500 font-extrabold mt-12">
        Trending Tours
      </h1>
      <div className=" m-16  md:grid md:grid-cols-3 md:gap-6">
        {products &&
          products.map((product) => (
            <ServicesCard product={product} key={product.id}></ServicesCard>
          ))}
      </div>
    </div>
  );
};

export default Services;
