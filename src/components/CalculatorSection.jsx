import Input from "./ui/Input";




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
}]


const CalculatorSection = () => {

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Input />
      <Input />
    </div>
  );
};

export default CalculatorSection;
