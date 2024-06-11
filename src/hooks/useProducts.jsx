import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vvhqfdkzqvrsfhjluall.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2aHFmZGt6cXZyc2Zoamx1YWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5NjYyOTYsImV4cCI6MjAzMTU0MjI5Nn0.Te07xau3TTETS3FFCuWivxkxFVI11dli9LV9zsRhSTo"
);

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await supabase.from("products").select("*");
      setProducts(data);
    };

    getProducts();
  }, []);

  return products;
};

export default useProducts;
