"use client";
import React, { useEffect, useState } from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { beauti_products } from "../../../Data/Beauti/beauti_products";
import Product from "../../components/Product/Product";
import Checkout from "../../components/Checkout/Checkout";

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODYyYWNmMmU5Njc5NDc2Y2I2NTMxMzgiLCJpYXQiOjE3NTYwNDcyODIsImV4cCI6MTc1NjIyMDA4Mn0.3eoaJlrp6zODFNz2WGidQLLetqtX13sWcCTs_gmxG4A"; // Replace with actual JWT token

        const response = await fetch("http://localhost:5454/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ Send token in Authorization header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.content);
        console.log(data);
        console.log(data.content);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <h2>testing6</h2>
      {/* <Product /> */}
      <Checkout />
      <MainCarosel />
      <HomeSectionCarousel data={products} sectionName="Beauti Products" />
      <HomeSectionCarousel
        data={beauti_products}
        sectionName="Beauti Products"
      />
      {/* <HomeSectionCarousel
        data={beauti_products}
        sectionName="Beauti Products"
      />
      <HomeSectionCarousel
        data={beauti_products}
        sectionName="Beauti Products"
      />
      <HomeSectionCarousel
        data={beauti_products}
        sectionName="Beauti Products"
      /> */}
    </div>
  );
}

export default HomePage;
