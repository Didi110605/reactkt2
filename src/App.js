import React, { useState } from 'react';
import ProductItem from './components/ProductItem';
import './App.css';  // Импортируйте файл стилей здесь

function App() {
  const [data, setData] = useState([
    {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
    {id: 2, name: 'Самокат', price: 700, count: 1}, 
    {id: 3, name: 'Ролики', price: 1300, count: 2}, 
    {id: 4, name: 'Сноуборд', price: 19000, count: 4}    
  ]);

  function handleDelete(id) {
    setData(data.filter(product => product.id !== id));
  }

  function handleAddProduct() {
    const promptProduct = prompt(
      'Добавить новый товар', 'Велосипед 1000'
    );

    if(!promptProduct) return;

    const name = promptProduct.split(' ')[0];
    const price = +promptProduct.split(' ')[1];
  
    if (name && price > 0) {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        count: 1,
      };
      
      setData([...data, newProduct]);
    } else {
      alert('Пример: Велосипед 1000');
    }
  }

  return (
    <div className="container">
      <button className='btnAdd' onClick={handleAddProduct}>
        Добавить новый товар
      </button>
      <div className="cardContainer"> {/* Измените здесь */}
        {data.length > 0 ? (
          data.map((product) => (
            <ProductItem key={product.id} product={product} handleDelete={handleDelete} />
          ))
        ) : (
          <div></div> // Пустой элемент вместо надписи
        )}
      </div>
    </div>
  );
}

export default App;