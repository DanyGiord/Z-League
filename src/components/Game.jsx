import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  faPlaystation,
  faWindows,
  faXbox,
  faApple,
  faAndroid,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Game({
  id,
  name,
  image,
  genres,
  platforms,
  metacriticScore,
  released,
  handleClick,
  game,
}) {
  const [infoHover, setInfoHover] = useState(false);

  return (
    <div id={id} className="game" data-aos="fade-up" data-aos-delay="300">
      <div
        className="game-card"
        onMouseOver={() => setInfoHover(true)}
        onMouseOut={() => setInfoHover(false)}
      >
        <div className="game-img">
          <img src={image} alt={name}></img>
          {infoHover ? (
            <Link to={`/games/${id}`} game={game}>
              <button className="more-btn">More Details</button>
            </Link>
          ) : null}
        </div>

        <div className="game-info">
          <div className="price">
            <button
              className="game-card-button"
              onClick={() => handleClick(game)}
            >
              Add to cart
            </button>

            <span> {game.metacritic} &euro;</span>
          </div>

          <div>
            {platforms.map((p, index) => {
              if (p.platform.slug === "playstation") {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faPlaystation}
                    style={{ marginRight: "4px" }}
                  />
                );
              } else if (p.platform.slug === "pc") {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faWindows}
                    style={{ marginRight: "4px" }}
                  />
                );
              } else if (p.platform.slug === "xbox") {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faXbox}
                    style={{ marginRight: "4px" }}
                  />
                );
              } else if (p.platform.slug === "nintendo") {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faN}
                    style={{ marginRight: "4px" }}
                  />
                );
              } else if (p.platform.slug === "ios") {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faApple}
                    style={{ marginRight: "4px" }}
                  />
                );
              } else if (p.platform.slug === "android") {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faAndroid}
                    style={{ marginRight: "4px" }}
                  />
                );
              } else if (p.platform.slug === "linux") {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faLinux}
                    style={{ marginRight: "4px" }}
                  />
                );
              }
            })}
          </div>
          <Link to={`/games/${id}`}>
            <h3 className="game-info-title">{name}</h3>
          </Link>

          {infoHover ? (
            <ul className="game-info-about">
              <li className="genres">
                <span>Genres:</span>
                <span className="genres-info">
                  {genres.map((g) => `${g.name} | `)}
                </span>
              </li>
              <hr />
              <li className="released-date">
                <span>Release Date:</span>
                <span className="release-info">{released}</span>
              </li>
              <hr />
              <CircularProgressbar
                className={
                  metacriticScore == null ? "hidden" : "metacriticScore"
                }
                styles={buildStyles({
                  textSize: "30px",
                  backgroundColor: "#322f35",
                  textColor: "#fff",
                  trailColor: "transparent",
                  pathColor:
                    (metacriticScore <= 100 && "#5FD068") ||
                    (metacriticScore <= 75 && "#faea48") ||
                    (metacriticScore <= 35 && "#bd2327"),
                })}
                percentage={metacriticScore}
                value={metacriticScore}
                text={metacriticScore}
                background
                backgroundPadding={6}
              />
            </ul>
          ) : (
            ""
          )}
        </div>

        {/* <CircularProgressbar
          className={metacriticScore == null ? "hidden" : "metacriticScore"}
          styles={buildStyles({
            textSize: "30px",
            backgroundColor: "#322f35",
            textColor: "#fff",
            trailColor: "transparent",
            pathColor:
              (metacriticScore <= 100 && "#5FD068") ||
              (metacriticScore <= 75 && "#faea48") ||
              (metacriticScore <= 35 && "#bd2327"),
          })}
          percentage={metacriticScore}
          value={metacriticScore}
          text={metacriticScore}
          background
          backgroundPadding={6}
        /> */}
      </div>
    </div>
  );
}

export default Game;
