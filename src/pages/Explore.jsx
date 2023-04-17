import { useNavigate } from "react-router-dom";
import Hamburger from "../images/Hamburger.svg";
import basket from "../images/basket.svg";
import search from "../images/search.svg";
import data from "../data";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sprite from "../images/symbol-defs.svg";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import nikeHero from "../images/nikeHero.jpg";
import sportVideo from "../images/video/sportVideo.mp4";
import categoryKidsImg from "../images/categoryKids.jpg";
import categoryWomenImg from "../images/categoryWomen.jpg";
import categoryMenImg from "../images/categoryMen.jpg";
import ProductCard from "../components/ProductCard";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
import linkedIn from "../images/linkedin.svg";

const Explore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("bestSellers");
  const bestSellersBtnClass =
    selectedCategory === "bestSellers" ? "arrivalsBtn active" : "arrivalsBtn";
  const newArrivalsBtnClass =
    selectedCategory === "newArrivals" ? "arrivalsBtn active" : "arrivalsBtn";
  const comingSoonBtnClass =
    selectedCategory === "comingSoon" ? "arrivalsBtn active" : "arrivalsBtn";
  const filteredData = data.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <>
      <div className="container bodyGray">
        <div className="headerSection">
          <button className="logoBtn">
            <a href="./BasketCase" className="headerLogoLink">
              <svg className="headerLogoIcon">
                <use xlinkHref={`${sprite}#nikeLogo`} />
              </svg>
            </a>
          </button>
          <button className="basketBtn" onClick={() => navigate("/basketCase")}>
            <div className="redCircle"></div>
            <img className="basketIcon" src={basket} alt="" />
          </button>
          <button className="backBtnIcon" onClick={() => navigate("/")}>
            <img src={Hamburger} alt="" />
          </button>
        </div>
        <div className="searchContainer">
          <form className="searchForm">
            <div className="searchBoxExplore">
              <img src={search} alt="" />
              <input type="text" className="searchInput" placeholder="Search" />
            </div>
          </form>
        </div>
      </div>
      <div className="imageSection">
        <img src={nikeHero} alt="heroImage" className="responsiveImage" />
        <div className="imageText">
          <h1>
            <span>MID SEASON SALE</span>
            <br />
            <span>UP TO 50% OFF</span>
          </h1>
          <button
            className="btnPrimary"
            onClick={() => navigate("/getStarted2")}
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="imageSection">
        <video
          src={sportVideo}
          autoPlay
          className="responsiveVideo"
          muted
          loop
        />
        <div className="videoTextBlock">
          <h1>
            <span>SHOP MEMBERSHIP</span>
            <br />
            <span className="videoTextBlockDescription">
              JOIN MEMBER EXPERIENCES
            </span>
          </h1>
          <button
            className="btnPrimary w150"
            onClick={() => navigate("/getStarted2")}
          >
            JOIN NOW
          </button>
        </div>
      </div>
      <div className="container">
        <h2 className="categoryLabel">SELECT CATEGORY</h2>
        <div className="categoryBlock">
          <div className="categoryCard">
            <img src={categoryKidsImg} alt="Kids" className="categoryImg" />
            <p className="categoryImgLabel">Kids</p>
          </div>
          <div className="categoryCard">
            <img src={categoryWomenImg} alt="Kids" className="categoryImg" />
            <p className="categoryImgLabel">Women</p>
          </div>
          <div className="categoryCard">
            <img src={categoryMenImg} alt="Kids" className="categoryImg" />
            <p className="categoryImgLabel">Men</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="arrivalsBlock">
          <button
            className={bestSellersBtnClass}
            onClick={() => setSelectedCategory("bestSellers")}
          >
            Best sellers
          </button>
          <button
            className={newArrivalsBtnClass}
            onClick={() => setSelectedCategory("newArrivals")}
          >
            New arrivals
          </button>
          <button
            className={comingSoonBtnClass}
            onClick={() => setSelectedCategory("comingSoon")}
          >
            Coming soon
          </button>
        </div>
        <div className="productBlock">
          {filteredData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="container bodyBlack">
            <div className="footerInfoBlock">
              <ul className="footerInfoList">
                <li className="footerInfoListItem">
                  <a href="/">GIFT CARDS</a>
                </li>
                <li className="footerInfoListItem">
                  <a href="/">FIND OUR SHOP</a>
                </li>
                <li className="footerInfoListItem">
                  <a href="/">BECOME A MEMBER</a>
                </li>
                <li className="footerInfoListItem">
                  <a href="/">FEEDBACK</a>
                </li>
                <li className="footerInfoListItem">
                  <a href="/">PROMO CODES</a>
                </li>
                <hr className="footerDivider" />
              </ul>
            </div>
            <div className="footerInfoBlock">
              <ul className="footerInfoList">
                <li className="footerInfoListItem">
                  <a href="/">GET HELP</a>
                </li>
                <li className="footerInfoListItem">
                  <a href="/">ABOUT SHOP</a>
                </li>
                <li className="footerInfoListItem">
                  <a href="/">JOIN US</a>
                </li>
                <hr className="footerDivider" />
              </ul>
            </div>
            <div className="footerInfoBlock">
              <ul className="footerInfoSocialList">
                <li className="footerInfoSocialItem">
                <a href="https://facebook.com">
                  <img src={facebook} alt="facebook" />
                </a>
                </li>
                <li className="footerInfoSocialItem">
                <a href="https://twitter.com">
                  <img src={twitter} alt="twitter" />
                </a>
                </li>
                <li className="footerInfoSocialItem">
                <a href="https://youtube.com">
                  <img src={youtube} alt="youtube" />
                </a>
                </li>
                <li className="footerInfoSocialItem">
                <a href="https://linkedIn.com">
                  <img src={linkedIn} alt="linkedIn" />
                </a>
                </li>
              </ul>
            </div>
      </div>
    </>
  );
};

export default Explore;
