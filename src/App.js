import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./Cart";
import Header from './Header';
import Home from './Home';
import { setItems } from './state';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => dispatch(setItems(data.products)));
  }, [])

  return (
    <div className='p-4'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>


    </div>
  );
}

export default App;
