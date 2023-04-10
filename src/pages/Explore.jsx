import { useNavigate } from "react-router-dom";
import Hamburger from "../images/Hamburger.svg";
import basket from "../images/basket.svg";
import search from "../images/search.svg";
import addToBasketIcon from "../images/addToBasketIcon.svg";
import data from "../data";
import { useState, useEffect } from "react";
import newIcon from "../images/newIcon.svg";
// import ellips from "../images/Ellipse.svg";
import star from "../images/star.svg";
// import footerMenu from "../images/footerMenu.svg";
import basketWhite from "../images/basketWhite.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sprite from "../images/symbol-defs.svg";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import nikeHero from "../images/nikeHero.jpg";

const Explore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setBasketItems] = useState([]);
  const [addedToBasket, setAddedToBasket] = useState(false);

  useEffect(() => {
    const items = localStorage.getItem("basketItems");
    if (items) {
      const parsedItems = JSON.parse(items);
      if (parsedItems.some((item) => item.id)) {
        setAddedToBasket(true);
      }
      setBasketItems(parsedItems);
    }
  }, []);

  const isCurrentPage = location.pathname === "/explore";

  const handleSearchSubmit = (event) => {
    navigate(`/search`);
  };

  const handleAddToBasket = (item) => {
    const items = localStorage.getItem("basketItems");
    let updatedBasketItems = JSON.parse(items) || [];

    // Check if item with same id already exists in basket
    const existingItem = updatedBasketItems.find(
      (basketItem) => basketItem.id === item.id
    );

    if (existingItem) {
      // Generate unique key for existing item
      existingItem.key = uuidv4();
    } else {
      // Generate unique key for new item
      const newItem = { ...item, key: uuidv4() };
      updatedBasketItems = updatedBasketItems.concat(newItem);
    }

    localStorage.setItem("basketItems", JSON.stringify(updatedBasketItems));
    setBasketItems(updatedBasketItems);
    setAddedToBasket(true);
  };

  const randomItems = [];
  while (randomItems.length < 10) {
    const item = data[Math.floor(Math.random() * data.length)];
    if (!randomItems.includes(item)) {
      randomItems.push(item);
    }
  }
  const randomArrivalsItems = [];
  while (randomArrivalsItems.length < 1) {
    const item = data[Math.floor(Math.random() * data.length)];
    if (!randomArrivalsItems.includes(item)) {
      randomArrivalsItems.push(item);
    }
  }

  return (
    <>
      <div className="mobileContainer bodyGray">
        <div className="headerSection">
          <button className="backBtnIcon" onClick={() => navigate("/")}>
            <img src={Hamburger} alt="" />
          </button>
          <h1 className="exploreTitle">
            <span>Explore!</span>
          </h1>
          <button className="basketBtn" onClick={() => navigate("/basketCase")}>
            {addedToBasket && <div className="redCircle"></div>}
            <img className="basketIcon" src={basket} alt="" />
          </button>
        </div>
        <div className="searchContainer">
          <form onSubmit={handleSearchSubmit}>
            <div className="searchBoxExplore">
              <img src={search} alt="" />
              <input
                type="text"
                className="searchInput"
                placeholder="Looking for clothes"
                onClick={(event) => handleSearchSubmit()}
              />
            </div>
          </form>
        </div>
        <div className="selectCategoryContainerMob">
          <h2 className="blockTitle">Select Category</h2>
          <div className="categoryContainer">
            <div className="categoryBtnBlock">
              <button className="categoryBtn">All shoes</button>
              <button className="categoryBtn">Outdoor</button>
              <button className="categoryBtn">Tennis</button>
              <button className="categoryBtn">Running</button>
            </div>
          </div>
        </div>
        <div className="popularBlockMob">
          <h3 className="popularTitleMob">Popular shoes</h3>
          <button className="seeAllBtnMob">See all</button>
        </div>
        <div className="shopCardContainerMob">
          {randomItems.map((item) => (
            <div key={uuidv4()} className="shopCard">
              <button className="heartBtn" onClick={() => navigate("/")}>
                <svg className="heartIcon">
                  <use xlinkHref={`${sprite}#heart`} />
                </svg>
              </button>
              <img src={item.image} alt="" className="shopCardImg" />
              <p className="shopCardDiscTitle">BEST SELLER</p>
              <p className="shopCardTitle">{item.name}</p>
              <div className="shopCardFooter">
                <p className="shopCardPrice">${item.price}</p>
                <button
                  className="addBasketIcon"
                  onClick={() => {
                    handleAddToBasket(item);
                    setAddedToBasket(true);
                  }}
                >
                  <img src={addToBasketIcon} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="newArrivalsHeaderBlockMob">
          <h3 className="newArrivalsTitleMob">New Arrivals</h3>
          <button className="seeAllBtnMob">See all</button>
        </div>
        <Slider
          autoplay={true}
          autoplaySpeed={4000}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          className="sliderMob"
        >
          {data.map((item) => (
            <div key={item.id} className="newArrivalsBlock">
              <div className="arrivalsItemDetails">
                <p className="newArrivalsItemTitle">Summer Sale</p>
                <p className="newArrivalsSalesTitle">15% OFF</p>
              </div>
              <img src={newIcon} alt="" className="newIcon" />
              <img src={star} alt="" className="star1" />
              <img src={star} alt="" className="star2" />
              <img src={star} alt="" className="star3" />
              <img src={item.image} alt="" className="newArrivalsImage" />
            </div>
          ))}
        </Slider>
        <div className="footerContainer bodyGray">
          <div className="justContCenter mainBasketBtnBlock">
            <button className="mainBasketBtn">
              <img
                src={basketWhite}
                alt=""
                onClick={() => navigate("/basketCase")}
              />
            </button>
          </div>
          <div className="footerMenu">
            <div className="justContCenter footerMenuSection">
              <div className="justContCenter">
                <button
                  className="footerMenuBtn"
                  onClick={() => navigate("/explore")}
                >
                  <svg
                    className={`footerBtnIcon mr41px ${
                      isCurrentPage ? "footerBtnActiveIcon" : ""
                    }`}
                  >
                    <use xlinkHref={`${sprite}#home`} />
                  </svg>
                </button>
                <button className="footerMenuBtn">
                  <svg className="footerBtnIcon">
                    <use xlinkHref={`${sprite}#heart`} />
                  </svg>
                </button>
              </div>
              <div className="justContCenter">
                <button className="footerMenuBtn">
                  <svg className="footerBtnIcon mr41px">
                    <use xlinkHref={`${sprite}#bell`} />
                  </svg>
                </button>
                <button className="footerMenuBtn">
                  <svg className="footerBtnIcon">
                    <use xlinkHref={`${sprite}#people`} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <img src={footerMenu} alt="" className="footerMenuDesk" /> */}
        </div>
      </div>

      {/* Desktop version */}
      <header className="header">
        <div className="headerOptions">
          <nav>
            <ul>
              <li className="">
                <a href="./BasketCase" className="headerLogoLink">
                  <svg className="headerLogoIcon mr41px">
                    <use xlinkHref={`${sprite}#nikeLogo`} />
                  </svg>
                </a>
              </li>
              <li>
                <a href="./BasketCase">Women</a>
              </li>
              <li>
                <a href="./BasketCase">Men</a>
              </li>
              <li>
                <a href="./BasketCase">Kids</a>
              </li>
              <li>
                <a href="./BasketCase">Collections</a>
              </li>
              <li>
                <a href="./BasketCase">Sports</a>
              </li>
              <li>
                <a href="./BasketCase">Sale</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="headerInfo">
          <div className="searchHeaderBlock mr30">
            <form onSubmit={handleSearchSubmit}>
              <div className="searchHeader">
                <svg className="searchIcon">
                  <use xlinkHref={`${sprite}#searchIcon`} />
                </svg>
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Looking for clothes"
                  onClick={(event) => handleSearchSubmit()}
                />
              </div>
            </form>
          </div>
          <button
            className="headerIcon mr30"
            onClick={() => navigate("/basketCase")}
          >
            {addedToBasket && <div className="redCircle"></div>}
            <svg className="headerIcon">
              <use xlinkHref={`${sprite}#basketWhite`} />
            </svg>
          </button>
          <button className="headerIcon mr30" onClick={() => navigate("/")}>
            <svg className="headerIcon">
              <use xlinkHref={`${sprite}#heart`} />
            </svg>
          </button>
          <button className="headerIcon">
            <svg className="headerIcon">
              <use xlinkHref={`${sprite}#account`} />
            </svg>
          </button>
        </div>
      </header>
      <section className="imageSection">
        <img src={nikeHero} alt="heroImage" className="responsiveImage" />
        <div className="imageText">
          <h1>
            <span>MID SEASON SALE</span>
            <br />
            <span>UP TO 50% OFF</span>
          </h1>
          <button
            className="btnSecondary"
            onClick={() => navigate("/getStarted2")}
          >
            SHOP NOW
          </button>
        </div>
      </section>
      <div className="container mobDisplNone">
        <div className="selectCategoryContainer">
          <h2 className="blockTitle">Select Category</h2>
          <div className="categoryContainer">
            <div className="categoryBtnBlock">
              <button className="categoryBtn">All shoes</button>
              <button className="categoryBtn">Outdoor</button>
              <button className="categoryBtn">Tennis</button>
              <button className="categoryBtn">Running</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mobDisplNone">
        <div className="popularBlock">
          <h3 className="popularTitle">Popular shoes</h3>
          <button className="seeAllBtnPopular">See all</button>
        </div>
        <div className="shopCardContainer">
          {randomItems.map((item) => (
            <div key={uuidv4()} className="shopCard">
              <button className="heartBtn" onClick={() => navigate("/")}>
                <svg className="heartIcon">
                  <use xlinkHref={`${sprite}#heart`} />
                </svg>
              </button>
              <img src={item.image} alt="" className="shopCardImg" />
              <p className="shopCardDiscTitle">BEST SELLER</p>
              <p className="shopCardTitle">{item.name}</p>
              <div className="shopCardFooter">
                <p className="shopCardPrice">${item.price}</p>
                <button
                  className="addBasketIcon"
                  onClick={() => {
                    handleAddToBasket(item);
                    setAddedToBasket(true);
                  }}
                >
                  <img src={addToBasketIcon} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container bodyBlue mobDisplNone">
        <div className="newArrivalsHeaderBlock">
          <h3 className="newArrivalsTitle">New Arrivals</h3>
          <button className="seeAllBtnArrivals">See all</button>
        </div>
        <Slider
          autoplay={true}
          autoplaySpeed={4000}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          className="slider"
        >
          {data.map((item) => (
            <div key={item.id} className="newArrivalsBlock">
              <div className="arrivalsItemDetails">
                <p className="newArrivalsItemTitle">Summer Sale</p>
                <p className="newArrivalsSalesTitle">15% OFF</p>
              </div>
              <img src={newIcon} alt="" className="newIcon" />
              <img src={star} alt="" className="star1" />
              <img src={star} alt="" className="star2" />
              <img src={star} alt="" className="star3" />
              <img src={item.image} alt="" className="newArrivalsImage" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Explore;
