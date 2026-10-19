function ProductCard({ items, onAddToCart }) {

    return (
        <div className="card">
        <img src={items.image} alt={items.name} />

        <h4>{items.name}</h4>
        <p>Rs {items.price}</p>
        <p>{items.category}</p>
        <button disabled={!items.instock} onClick={() => onAddToCart(items.id)}>
            {items.instock?"Add To Cart":"Out of Stock"}</button>
        </div>
    )
}

export default ProductCard