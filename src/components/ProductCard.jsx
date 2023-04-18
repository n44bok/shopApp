import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import basket from "../images/basket.svg";
import Modal from "react-modal";


const ProductCard = ({ product }) => {
    const [, setBasketItems] = useState([]);
    const [addedToBasket, setAddedToBasket] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    

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
          <img
            src={product.image}
            alt={product.name}
            className="productImg"
            onClick={() => setIsModalOpen(true)}
          />
          <h2 className="productLabel">{product.name}</h2>
          <p>${product.price}</p>
          <button
            className="productBasketBtn"
            onClick={() => handleAddToBasket(product)}
          >
            <img className="basketIcon" src={basket} alt="" />
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
              },
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                background: "#fff",
                borderRadius: "8px",
                maxWidth: "90vw",
                maxHeight: "90vh",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                padding: "16px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            {/* Content of the modal */}
            <button onClick={() => setIsModalOpen(false)}>Close</button>
            <img src={product.image} alt={product.name} className="productModalImg"/>
            <div className="justSpaceBetween">
            <p className="productModalPrice">${product.price}</p>
            <button
            className="productModalBasketBtn"
            onClick={() => handleAddToBasket(product)}
          >
            Add to basket
          </button>
            </div>
            <h2 className="productLabel">{product.name}</h2>
            <p className="productModalDescription">{product.description}</p>
          </Modal>
        </div>
      );
  };

  export default ProductCard;