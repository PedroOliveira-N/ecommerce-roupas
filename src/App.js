import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import { useState } from 'react';

function App() {
  const [carro, setCarro] = useState([]);

  const addAoCarrinho = (product) => {
    setCarro((prevCarro) => {
      const itemExiste = prevCarro.find((item) => item.id === product.id);

      if (itemExiste) {
        return prevCarro.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCarro, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="App">
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Home carro={carro} addAoCarrinho={addAoCarrinho} />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carrinho" element={<Carrinho carro={carro} setCarro={setCarro}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
