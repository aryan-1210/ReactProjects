import logo from './logo.svg';
import './App.css';
import Farmers from './Components/farmers';
import ProductFarmers from './Components/productFarmers';

function App() {

  const farmers = [
    { name: 'Vishal', age: 45, location: 'maharashtra' },
    { name: 'Ram', age: 55, location: 'gujarat' },
    { name: 'Dharmesh', age: 46, location: 'haidrabad' },
    { name: 'Nikunj', age: 76 },
  ];

  const products = [
    { name: 'grapes,banana', type: 'fruit', quantity: 5 },
    { name: 'potato', type: 'vegetable', quantity: 9 },
    { name: 'Apple', type: 'fruit', quantity: 5 },
    { name: 'wheat', type: 'grain', quantity: 8 },
  ];


  return (
    <div className="App">
      {farmers.map((farmers, index) => <Farmers key={index}{...farmers}></Farmers>)}
      {products.map((products, index) => <ProductFarmers key={index}{...products}></ProductFarmers>
      )}

    </div>
  );
}

export default App;

