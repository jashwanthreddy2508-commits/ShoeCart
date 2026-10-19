import { useState } from 'react'
import './App.css'
import ProductCard from './Cards'

function App() {
  const [cart, setCart] = useState([])

  const handleonclick = (id) => {
    const selectedItem = items.find((item) => item.id === id)

    if (!selectedItem) return

    setCart((currentCart) => [...currentCart, selectedItem])
  }

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((currentCart) => currentCart.filter((_, index) => index !== indexToRemove))
  }
 const items = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 2999,
    instock: true,
    category: "Shoes",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-ko-nrtFyV89npy4vhmijhWzi08t8pwhidSQqHe3dJymb4peT1E-9mBM596AFEtxXUiYwi0QindYpXLJDciL2cf2OxAYofUQyxB4J0VgvRgnA_WifKRr3AZV48STdYZc7KbuyB6ic&usqp=CAc"
  },
  {
    id: 2,
    name: "Adidas Shoes",
    price: 2499,
    instock: false,
    category: "Shoes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAbRKmztVR7u-ZmY2En6N3WO0EVdOlchJqH0D3nfOSQ&s=10"
  },
  {
    id: 3,
    name: "reebok",
    price: 1499,
    instock: true,
    category: "Shoes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuir5Pz4W0mm7bTtNKq5Z_vG1J62A5eD0wmWGQPT6fmg&s"
  },
  {
    id: 4,
    name: "sketchers Shoes",
    price: 1999,
    instock: false,
    category: "Shoes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcQKnXJ5ky3OfXna7oxNY1uQXRZpsyXwws0PBnAOD9Q&s=10"
  },
  {
    id: 5,
    name: "NB Shoes",
    price: 3999,
    instock: true,
    category: "Shoes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrSSTqZ75wM724yff4hEKH-C-aqCnDLSsEsDbFXKz2w&s=10"
  },
  {
    id: 6,
    name: "Wrong Shoes",
    price: 1399,
    instock: false,
    category: "Shoes",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRTuPOsFB3dUhqy3hhVYrxHe8BcaaOCViz-gkPtaS1rXQfcDjS8IbFJqYQmCCdHo_-B6_aeSeHcfOslMq3WW1z4InaoqkcUq_SyzhgAgP4n2cpfp9SPVZYI9w"
  },
  {
    id: 7,
    name: "RedTape Shoes",
    price: 1299,
    instock: true,
    category: "Shoes",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0zv4Uc6hEUEXnZFtAdfW31zWEshlR9ItOoXRG8jKe8HQH9IO7UVG9vkbACuqikcjX9nebnKfmz6w8op8b1l54C5f7ikxgf1jfA12wfAqAi-RPGEugRg9w7IM"
  }
];

  return (
    <>
     <div className='container'>
    <div className='store-layout'>
      <section>
        <p className='cart-count'>Cart items: {cart.length}</p>
        <div className='cards'>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            items={item}
            onAddToCart={handleonclick}
          />
          )
        )}
        
        </div>
      </section>
      <aside className='cart-panel'>
        <div className='cart-panel-heading'>
          <div><span className='cart-label'>YOUR CART</span><h2>Selected pairs</h2></div>
          <span className='cart-badge'>{cart.length}</span>
        </div>
        {cart.length === 0 ? (
          <p className='empty-cart'>Your cart is waiting for a good pair.</p>
        ) : (
          <div className='cart-items'>
            {cart.map((item, index) => (
              <div className='cart-item' key={`${item.id}-${index}`}>
                <img src={item.image} alt={item.name} />
                <div><h3>{item.name}</h3><p>Rs {item.price}</p></div>
                <button className='remove-button' onClick={() => handleRemoveFromCart(index)} aria-label={`Remove ${item.name} from cart`}>×</button>
              </div>
            ))}
          </div>
        )}
        <div className='cart-total'><span>Total</span><strong>Rs {cart.reduce((total, item) => total + item.price, 0)}</strong></div>
        <button className='checkout-button' disabled={cart.length === 0}>Checkout <span>↗</span></button>
      </aside>
    </div>

     </div>
    </>
  )
}


export default App
