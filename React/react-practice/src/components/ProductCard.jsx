import Button from "./Button";

function ProductCard({name, price}){
    return(
        <>
        <h3>{name}</h3>
        <p>Price: ₹{price}</p>
        <Button text="Buy Now" variant="primary"/>
        </>
    )
}
export default ProductCard;