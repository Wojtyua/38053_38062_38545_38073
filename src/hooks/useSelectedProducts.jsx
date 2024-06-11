import { useState } from "react";

const useSelectedProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totals, setTotals] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    sugar: 0,
    fat: 0,
  });

  const addProductToList = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
    setTotals((prevTotals) => ({
      calories: prevTotals.calories + product.calories,
      protein: prevTotals.protein + product.protein,
      carbs: prevTotals.carbs + product.carbs,
      sugar: prevTotals.sugar + product.sugar,
      fat: prevTotals.fat + product.fat,
    }));
  };

  return {
    selectedProducts,
    totals,
    addProductToList,
  };
};

export default useSelectedProducts;
