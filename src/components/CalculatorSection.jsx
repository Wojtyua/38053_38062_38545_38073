import React, { useState, useEffect } from 'react';

const dummy = [{
  name: "ryz",
  calorie: 6,
  protein: 10,
  carbs: 15,
  sugar: 5,
  fat: 5,
}, {
  name: "ryz2",
  calorie: 6,
  protein: 10,
  carbs: 15,
  sugar: 5,
  fat: 5,
}];

const CalculatorSection = () => {
  const [totals, setTotals] = useState({
    calorie: 0,
    protein: 0,
    carbs: 0,
    sugar: 0,
    fat: 0,
  });

  useEffect(() => {
    const calculateTotals = () => {
      let calorie = 0;
      let protein = 0;
      let carbs = 0;
      let sugar = 0;
      let fat = 0;

      dummy.forEach(item => {
        calorie += item.calorie;
        protein += item.protein;
        carbs += item.carbs;
        sugar += item.sugar;
        fat += item.fat;
      });

      setTotals({ calorie, protein, carbs, sugar, fat });
    };

    calculateTotals();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="mb-4 p-4 text-center">

        <h1 className='text-xl font-bold mb-4'>Totals:</h1> 
        <table className='text-center'>
          <tr>
            <th>Calories</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Sugar</th>
            <th>Fat</th>
          </tr>
          <tr>
            <td>{totals.calorie} kcal</td>
            <td>{totals.protein}g</td>
            <td>{totals.carbs}g</td>
            <td>{totals.sugar}g</td>
            <td>{totals.fat}g</td>
          </tr>
        </table>
      </div>
      <Input />
      <Input />
    </div>
  );
};

const Input = () => {
  return <input type="text" className="border p-2 m-2" />;
};

export default CalculatorSection;
