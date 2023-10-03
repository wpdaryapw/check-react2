function AddProduct({addNewProd}){

    return(
        <div>
            <button onClick={() => addNewProd()}>Добавить новый товар</button>
        </div>
    )
}

export default AddProduct