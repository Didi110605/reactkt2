import { useState } from 'react';
import styles from './ProductItem.module.css'; 

function ProductItem({ product, handleDelete }) {
  const [count, setCount] = useState(product.count);

  const handleIncrement = () => {
    if (count < 25) setCount(count + 1);
    else alert('Перебор');
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
    else handleDelete(product.id);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle} onDoubleClick={() => handleDelete(product.id)}>
        {product.name}
      </h3>
      <p className={styles.cardText}>Цена: ₽{product.price}</p>
      <div className={styles.buttonGroup}>
        <button className={styles.Btn} onClick={handleDecrement}>-</button>
        <span className={styles.countDisplay}>{count}</span>
        <button className={`${styles.Btn} ${styles.btnSuccess}`} onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default ProductItem; 