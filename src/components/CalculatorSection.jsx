import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import useSelectedProducts from "../hooks/useSelectedProducts";
import ProductSuggestions from "../hooks/ProductSuggestions";
import ProductDetails from "../hooks/ProductDetails";
import SelectedProductsTable from "../hooks/SelectedProductsTable";

const CalculatorSection = () => {
  const products = useProducts();
  const { selectedProducts, totals, addProductToList } = useSelectedProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelected = (product) => {
    setSelectedProduct(product);
  };

  const handleAddProduct = () => {
    if (selectedProduct) {
      addProductToList(selectedProduct);
      setSelectedProduct(null);
    }
  };

  return (
    <section className="py-20" id="calculator-section">
    <h2 className="text-4xl capitalize font-bold mb-10">Zacznij liczyć</h2>
    <div className="flex flex-col items-center h-screen space-y-8">
      <ProductSuggestions products={products} onProductSelected={handleProductSelected} />

      {selectedProduct && (
        <ProductDetails product={selectedProduct} onAddProduct={handleAddProduct} />
      )}

      {selectedProducts.length > 0 && (
        <SelectedProductsTable selectedProducts={selectedProducts} totals={totals} />
      )}
    </div>
  </section>
  );
};

export default CalculatorSection;
