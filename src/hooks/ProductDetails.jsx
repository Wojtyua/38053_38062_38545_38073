import React from "react";

const ProductDetails = ({ product, onAddProduct }) => {
  return (
    <div className="mt-4 p-4 text-center">
      <h1 className="text-xl capitalize font-bold mb-4">Szczegóły: "{product.name}"</h1>
      <table className="text-center">
        <thead>
          <tr>
            <th>Kalorie</th>
            <th>Białko</th>
            <th>Węglowodany</th>
            <th>Cukier</th>
            <th>Tłuszcz</th>
          </tr>
        </thead>
        <tbody>
          <tr className="capitalize">
            <td>{Math.round(product.calories)} kcal</td>
            <td>{Math.round(product.protein)}g</td>
            <td>{Math.round(product.carbs)}g</td>
            <td>{Math.round(product.sugar)}g</td>
            <td>{Math.round(product.fat)}g</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={onAddProduct}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
      >
        Dodaj
      </button>
    </div>
  );
};

export default ProductDetails;
