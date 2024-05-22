import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Autosuggest from "react-autosuggest";

const supabase = createClient(
  "https://vvhqfdkzqvrsfhjluall.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2aHFmZGt6cXZyc2Zoamx1YWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5NjYyOTYsImV4cCI6MjAzMTU0MjI5Nn0.Te07xau3TTETS3FFCuWivxkxFVI11dli9LV9zsRhSTo"
);

const CalculatorSection = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data } = await supabase.from("Products").select("*");
    setProducts(data);
  }

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : products.filter((prod) => prod.name.toLowerCase().includes(inputValue));
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setSelectedProduct(suggestion);
  };

  const inputProps = {
    placeholder: "Enter product name...",
    value,
    onChange,
  };

  const [totals, setTotals] = useState({
    calorie: 0,
    protein: 0,
    carbs: 0,
    sugar: 0,
    fat: 0,
  });

  useEffect(() => {
    if (selectedProduct) {
      setTotals({
        calorie: selectedProduct.calorie,
        protein: selectedProduct.protein,
        carbs: selectedProduct.carbs,
        sugar: selectedProduct.sugar,
        fat: selectedProduct.fat,
      });
    }
  }, [selectedProduct]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center" id="calculator-section">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
      />

      {selectedProduct && (
        <div className="mt-4 p-4 text-center">
          <h1 className="text-xl font-bold mb-4">Product Details:</h1>
          <table className="text-center">
            <thead>
              <tr>
                <th>Calories</th>
                <th>Protein</th>
                <th>Carbs</th>
                <th>Sugar</th>
                <th>Fat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedProduct.calorie} kcal</td>
                <td>{selectedProduct.protein}g</td>
                <td>{selectedProduct.carbs}g</td>
                <td>{selectedProduct.sugar}g</td>
                <td>{selectedProduct.fat}g</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CalculatorSection;
