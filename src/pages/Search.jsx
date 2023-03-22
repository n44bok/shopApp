import { useEffect, useState } from "react";
import microphone from '../images/microphone.svg';
import search from '../images/search.svg';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backIcon from "../images/backIcon.svg";


const Search = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (!recognition) {
      const recognition = new window.webkitSpeechRecognition();
      setRecognition(recognition);
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1];
        const transcript = result[0].transcript.trim().toLowerCase();

        setSearchTerm(transcript);
      };

      recognition.onend = () => {
        setRecognition(null);
      };
    }
  }, [recognition]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target[0].value);
  };

  const handleVoiceSearch = () => {
    if (!recognition) {
      const newRecognition = new window.webkitSpeechRecognition();
      setRecognition(newRecognition);
      newRecognition.continuous = true;
      newRecognition.interimResults = true;

      newRecognition.onresult = (event) => {
        const result = event.results[event.results.length - 1];
        const transcript = result[0].transcript.trim().toLowerCase();

        setSearchTerm(transcript);
      };

      newRecognition.onend = () => {
        setRecognition(null);
      };

      newRecognition.start();
    } else {
      recognition.start();
    }
  };

  useEffect(() => {
    if (searchTerm !== "") {
      axios
        .get(
          `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=20`,
          {
            headers: {
              Authorization:
                "ED3op15IkhrQEDjj2YYKEidGzrOC72tv5kiGJC2caFZYHyuILNvBe03z",
            },
          }
        )
        .then((response) => {
          setResults(response.data.photos);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  function getRandomName() {
    const adjectives = [
      "Beautiful",
      "Charming",
      "Delightful",
      "Elegant",
      "Fascinating",
      "Gorgeous",
      "Handsome",
      "Lovely",
      "Magnificent",
      "Radiant",
    ];
    const nouns = [
      "Landscape",
      "Mountain",
      "River",
      "Forest",
      "Beach",
      "Sunset",
      "Island",
      "Valley",
      "Waterfall",
      "Wildlife",
    ];
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
  }

  function getRandomPrice() {
    return Math.floor(Math.random() * 510) + 50;
  }

  function getRandomDescription() {
    const descriptions = [
      "A stunning view",
      "Amazing colors",
      "Breath-taking scenery",
      "Serene and peaceful",
      "Nature at its finest",
      "Tranquil atmosphere",
      "Refreshing and invigorating",
      "Unforgettable experience",
      "Awe-inspiring landscape",
      "Picture-perfect moment",
    ];
  
    const words = [];
    for (let i = 0; i < 3; i++) {
      words.push(descriptions[Math.floor(Math.random() * descriptions.length)]);
    }
  
    return words.join(' ');
  }
  

  return (
    <div className="mobileContainer bodyGray">
      <h1 className="smallHeaderTitle">Search</h1>
      <div className="searchContainer">
        <form onSubmit={handleSearchSubmit}>
          <div className="searchBox">
          <img src={search} alt='' />
            <input
              type="text"
              className="searchInput"
              placeholder="Search your clothes"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button className="voiceSearchButton" onClick={handleVoiceSearch}>
            <img src={microphone} alt='' />
            </button>
          </div>
        </form>
      </div>
      <div className="searchGalleryContainer">
  <ul className="searchGallery">
    {results.map((result) => (
      <li key={result.id} className="searchGalleryItem">
        <img
          src={result.src.medium}
          alt={result.photographer}
          className="searchGalleryImg"
        />
        <div className="galleryItemInfo">
          <div>
            <h2>{getRandomName()}</h2>
            <p>{getRandomDescription()}</p>
          </div>
          <span>${getRandomPrice()}</span>
        </div>
      </li>
    ))}
  </ul>
</div>

      <button className="backBtnIcon" onClick={() => navigate("/explore")}>
        <img src={backIcon} alt="" />
      </button>
    </div>
  );
};

export default Search;
