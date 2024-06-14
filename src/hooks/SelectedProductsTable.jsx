import React from "react";

const SelectedProductsTable = ({ selectedProducts, totals }) => {
  return (
    <div className="mt-4 p-4 text-center bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">Wybrane produkty:</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-primary">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Nazwa</th>
            <th className="py-2 px-4 border-b border-gray-200">Kalorie</th>
            <th className="py-2 px-4 border-b border-gray-200">Białko</th>
            <th className="py-2 px-4 border-b border-gray-200">Węglowodany</th>
            <th className="py-2 px-4 border-b border-gray-200">Cukier</th>
            <th className="py-2 px-4 border-b border-gray-200">Tłuszcz</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product, index) => (
            <tr className="capitalize bg-white even:bg-gray-50" key={index}>
              <td className="py-2 px-4 border-b border-gray-200">{product.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.calories)} kcal</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.protein)}g</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.carbs)}g</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.sugar)}g</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.fat)}g</td>
            </tr>
          ))}
          <tr className="font-bold bg-secondary">
            <td className="py-2 px-4 border-b border-gray-200">Total</td>
            <td className="py-2 px-4 border-b border-gray-200">{totals.calories.toFixed(0)} kcal</td>
            <td className="py-2 px-4 border-b border-gray-200">{totals.protein.toFixed(0)}g</td>
            <td className="py-2 px-4 border-b border-gray-200">{totals.carbs.toFixed(0)}g</td>
            <td className="py-2 px-4 border-b border-gray-200">{totals.sugar.toFixed(0)}g</td>
            <td className="py-2 px-4 border-b border-gray-200">{totals.fat.toFixed(0)}g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectedProductsTable;
