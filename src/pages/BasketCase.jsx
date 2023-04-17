import { useNavigate } from "react-router-dom";
import backIcon from "../images/backIcon.svg";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import sprite from "../images/symbol-defs.svg";

const BasketCase = () => {
  const [basketItems, setBasketItems] = useState([]);
  const navigate = useNavigate();
  const subTotal = basketItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  useEffect(() => {
    const storedBasketItems = JSON.parse(localStorage.getItem("basketItems"));
    if (storedBasketItems) {
      setBasketItems(storedBasketItems);
    }
  }, []);

  const delivery = subTotal * 0.2;
  const totalCost = subTotal + delivery;

  return (
    <>
      <div className="basketContainer bodyGray">
        <div className="headerSection bodyGray">
          <button className="backBtnIcon" onClick={() => navigate("/shopApp")}>
            <img src={backIcon} alt="" />
          </button>
          <h2 className="sectionTitle bodyGray">My Card</h2>
          <button className="backBtnIcon"></button>
        </div>
        <div className="itemsCounter bodyGray">{basketItems.length} Items</div>
        <div className="bodyGray scrollMyCard">
          {basketItems && basketItems.length > 0 ? (
            basketItems.map((item) => (
              <div key={item.id} className="searchGalleryItem">
                <img src={item.image} alt="" className="searchGalleryImg" />
                <div className="basketItemDetails">
                  <div>
                    <p className="basketItemTitle">{item.name}</p>
                    <p className="basketItemPrice">${item.price}</p>
                  </div>
                  <div className="basketItemActions">
                    <button
                      className="basketActionsBtn"
                      onClick={() => {
                        const updatedBasketItems = [
                          ...basketItems,
                          { ...item, id: uuidv4() },
                        ];
                        setBasketItems(updatedBasketItems);
                        localStorage.setItem(
                          "basketItems",
                          JSON.stringify(updatedBasketItems)
                        );
                      }}
                    >
                      <svg className="basketBtnIcon">
                        <use xlinkHref={`${sprite}#plus`} />
                      </svg>
                    </button>
                    <button
                      className="basketActionsBtn"
                      onClick={() => {
                        const updatedBasketItems = basketItems.filter(
                          (i) => i.id !== item.id
                        );
                        setBasketItems(updatedBasketItems);
                        localStorage.setItem(
                          "basketItems",
                          JSON.stringify(updatedBasketItems)
                        );
                      }}
                    >
                      <svg className="basketBtnIcon">
                        <use xlinkHref={`${sprite}#bin`} />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="emptyBasket">Your basket is empty</p>
          )}
        </div>
      </div>
      <div className="sectionFooter bodyWhite">
        <div className="subTotalDelivery">
          <h3 className="subTotalTitle">Subtotal</h3>
          <span className="subTotalCount">${subTotal.toFixed(2)}</span>
        </div>
        <div className="subTotalDelivery">
          <h3 className="subTotalTitle">Delivery</h3>
          <span className="subTotalCount">${delivery.toFixed(2)}</span>
        </div>
        <div className="line"></div>
        <div className="subTotalDelivery mb20">
          <h3 className="subTotalTitle black">Total Cost</h3>
          <span className="subTotalCount blue">${totalCost.toFixed(2)}</span>
        </div>
        <button
          className="btnPrimary mb20"
          onClick={() => navigate("/explore")}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default BasketCase;
