import React from "react";

const ProductDetails = ({ product, onAddProduct }) => {
  return (
    <div className="mt-4 p-4 text-center bg-white shadow-md rounded-lg">
      <h1 className="text-xl capitalize font-bold mb-4">Szczegóły: "{product.name}"</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-primary">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Kalorie</th>
            <th className="py-2 px-4 border-b border-gray-200">Białko</th>
            <th className="py-2 px-4 border-b border-gray-200">Węglowodany</th>
            <th className="py-2 px-4 border-b border-gray-200">Cukier</th>
            <th className="py-2 px-4 border-b border-gray-200">Tłuszcz</th>
          </tr>
        </thead>
        <tbody>
          <tr className="capitalize bg-white even:bg-gray-50">
            <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.calories)} kcal</td>
            <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.protein)}g</td>
            <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.carbs)}g</td>
            <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.sugar)}g</td>
            <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.fat)}g</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={onAddProduct}
        className="mt-4 px-4 py-2 bg-secondary text-text rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Dodaj
      </button>
    </div>
  );
};

export default ProductDetails;
