import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import basket from "../images/basket.svg";

const ProductCard = ({ product }) => {
    const [, setBasketItems] = useState([]);
    const [addedToBasket, setAddedToBasket] = useState(false);

    const handleAddToBasket = (item) => {
        const items = localStorage.getItem("basketItems");
        let updatedBasketItems = JSON.parse(items) || [];
    
      
        const existingItem = updatedBasketItems.find(
          (basketItem) => basketItem.id === item.id
        );
    
        if (existingItem) {
         
          existingItem.key = uuidv4();
        } else {
          
          const newItem = { ...item, key: uuidv4() };
          updatedBasketItems = updatedBasketItems.concat(newItem);
        }
    
        localStorage.setItem("basketItems", JSON.stringify(updatedBasketItems));
        setBasketItems(updatedBasketItems);
        setAddedToBasket(true);
      };
  
    return (
      <div className="productCard">
        <img src={product.image} alt={product.name} className="productImg"/>
        <h2 className="productLabel">{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button className="productBasketBtn" onClick={() => handleAddToBasket(product)}>
          <img className="basketIcon" src={basket} alt="" />
        </button>

      </div>
    );
  };

  export default ProductCard;