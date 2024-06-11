import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

const ProductSuggestions = ({ products, onProductSelected }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : products.filter((prod) =>
          prod.name.toLowerCase().includes(inputValue)
        );
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
    onProductSelected(suggestion);
    setValue("");
  };

  const inputProps = {
    placeholder: "Wprowadź nazwę produktu...",
    value,
    onChange,
  };

  return (
    <div className="flex justify-center w-full">
      <div className="relative w-1/4">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={onSuggestionSelected}
          theme={{
            input:
              "w-full text-lg font-medium bg-backgroundDarker rounded-full border border-secondary px-8 py-3",
            suggestionsContainer:
              "absolute z-10 w-full bg-white border border-gray-300 mt-1 shadow-lg",
          }}
        />
      </div>
    </div>
  );
};

export default ProductSuggestions;
