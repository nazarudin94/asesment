// pages/index.js
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {products.map((p) => (
          <li key={p.product_id}>
            {p.product_name} - {p.product_brand}
          </li>
        ))}
      </ul>
    </div>
  );
}
