import styles from './ProductItem.module.css'


  
  function ProductItem(props) {
    const { name, price, count, id, handleIncrement, handleDecrement, deleteProd } = props

    function handleDoubleClick(event, id, callback) {
        event.stopPropagation()
        callback(id)
      }
  
    return (
      <div className={styles.item} onDoubleClick={() => deleteProd(id)}>
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        <div className={styles.buttons}>
          <button onClick={() => handleDecrement(id)} onDoubleClick={(event) => handleDoubleClick(event, id, deleteProd)}>-</button>
          <h3>{count}</h3>
          <button onClick={() => handleIncrement(id)} onDoubleClick={(event) => handleDoubleClick(event, id, handleIncrement)}>+</button>
        </div>
      </div>
    );
  }
  
  export default ProductItem
  
