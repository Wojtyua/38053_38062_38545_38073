import React from "react";

const SelectedProductsTable = ({ selectedProducts, totals }) => {
  return (
    <div className="mt-4 p-4 text-center">
      <h1 className="text-xl font-bold mb-4">Wybrane produkty:</h1>
      <table className="text-center">
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Kalorie</th>
            <th>Białko</th>
            <th>Węglowodany</th>
            <th>Cukier</th>
            <th>Tłuszcz</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product, index) => (
            <tr className="capitalize" key={index}>
              <td>{product.name}</td>
              <td>{product.calories} kcal</td>
              <td>{product.protein}g</td>
              <td>{product.carbs}g</td>
              <td>{product.sugar}g</td>
              <td>{product.fat}g</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td>Total</td>
            <td>{totals.calories.toFixed(2)} kcal</td>
            <td>{totals.protein.toFixed(2)}g</td>
            <td>{totals.carbs.toFixed(2)}g</td>
            <td>{totals.sugar.toFixed(2)}g</td>
            <td>{totals.fat.toFixed(2)}g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectedProductsTable;
