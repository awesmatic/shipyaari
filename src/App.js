import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Header from './components/Header';
import Home from './components/Home';
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
