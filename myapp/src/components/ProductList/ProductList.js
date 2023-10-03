import ProductItem from "../ProductItem/ProductItem"
import styles from './ProductList.module.css'

function ProductList(props){
    const {product, handleIncrement, handleDecrement, deleteProd} = props
    return(
        <div className={styles.container}>
            {product.map (elem => <ProductItem
                                   key={elem.id}
                                   id={elem.id}
                                   name={elem.name}
                                   price={elem.price}
                                   count={elem.count}
                                   handleIncrement={handleIncrement}
                                   handleDecrement={handleDecrement}
                                   deleteProd={deleteProd}                              
                                />)}
        </div>
    )
}

export default ProductList
