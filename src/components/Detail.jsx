
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel'
import './Details.css'


export default function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  const [movies, setMovies] = useState("");
  const [extended, setExtended] = useState("")
  const API_KEY = "096cc99894964f3288aa6409f834a1ad";

  // detail 
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const data = await response.json();
        setDetails(data);
      } catch (err) {
        console.error(err);
      }
    };
    console.log(id);
    console.log(details);
    getDetails();
  }, []);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(`/`);
  };

  const handleExtend = (e) => {
    if (document.getElementById("20").innerHTML === "More") {
      document.getElementById("21").className = "aboutBottom";
    } else if (document.getElementById("20").innerHTML === "Hide") {
      document.getElementById("21").className = "aboutBottomClosed";
    }
    setExtended(!extended);
  }


  // Trailer
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${API_KEY}`);
        const data = await response.json();
        setMovies(data.results[0].data.max);
        console.log(movies);
      } catch (err) {
        console.error(err);
      }
    };
    getMovies();
  }, []);
  console.log(details);

  return (

    <div data-aos="fade-right" data-aos-delay="400">
      {/* <img src={details.background_image} alt="" /> */}
      <div className="header-details " data-aos="fade-down" data-aos-delay="500">
        <BsArrowLeft className="arrow-back" style={{ marginLeft: "20px" }} onClick={() => navigateHome()} />
        <h1 className="details-name">{details.name}</h1>
      </div>



      <div className=".GamePage_game__MtgUg block" style={{ display: "flex", justifyContent: "space-around" }} data-aos="fade-right" data-aos-delay="800">

        <Carousel style={{ maxWidth: "1150px", borderRadius: "20px" }} className="container">
          <Carousel.Item >
            <img
              className="d-block w-100 coverino"
              src={details.background_image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 coverino"
              src={details.background_image_additional}
              alt="Second slide"
            />
          </Carousel.Item>

        </Carousel>


        <div className="GamePage_gameInfo__Idxne container ">
          <div className="GamePage_about__hFtme" >
            <div className="GamePage_aboutTop__lZAwm" id="21"  >
              <h2 className="bold text-white ">About</h2>
              <p >{details.description_raw}</p>
              <hr />
              <h4>Genres: {details && details.genres.map((g) => `${g.name} | `)}</h4>
              <hr />
              <a href={details.metacritic_url} style={{ color: "#18FFAC" }}>Metacritic</a>
              <br />
              <a href={details.website}>{details.name}</a>
            </div>
            <div className="undefined GamePage_aboutBottomClosed__GXMf1 ">
              <div style={{ opacity: "1", transform: "none" }} >

                <div className="GamePage_closed__5iX2+">
                  <a href="">cao</a>
                  <h4>asd</h4>
                  <h4>asd</h4>
                  <h4>asd</h4>
                </div>
              </div>
              <button
                id="20"
                onClick={handleExtend}
                aria-label="Extend"
                className="GamePage_buttonHovered__tymaP"
              >
                {extended ? "Hide" : "More"}
              </button>
            </div>
          </div>
          <div className="GamePage_addToCart__EGEGX" data-aos="fade-in" data-aos-delay="1000">
            <h2>59,99 $</h2>
            <button className="game-card-button">ADD TO CART</button>
          </div>
        </div>
      </div>

      {/* <div className="details container">
        <div className="details-descriptions ">
          <h1>{details.name}</h1>
          <h4>{details && details.genres.map((g) => `${g.name} | `)}</h4>
          <p>{details.description_raw}</p>
          <a href={details.metacritic_url} style={{ color: "#18FFAC" }}>Metacritic</a>
          <br />
          <a href={details.website}>{details.name}</a>
        </div>

        <div className="details-images">
          <video width="400" height="300" src={movies} type="video/mp4" controls></video>
          <div style={{ display: "flex" }} className="details-img">
            <img src={details.background_image} alt={details.name}></img>
            <img src={details.background_image_additional} alt={details.name}></img>
          </div>
          <div>
            <p>Release Date: <span>{details.released}</span></p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
