const PropsMethode =()=>{
    return(
        <ProductItem
        name="Dilip yadav"
        age={25}
        location="Bikaner"
        isMarried ={false}
        />
    )
}

export default PropsMethode;

const ProductItem =(props)=>{
    return(
    <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h3>{props.location}</h3>
        <h4>{props.isMarried}</h4>

    </div>)
}

// export default ProductItem;
