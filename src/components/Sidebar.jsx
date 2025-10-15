import React from "react";
import { useEffect, useState } from "react";
import "./SideBar.css";
import { DiWindows, DiApple } from "react-icons/di";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import {
  GiPistolGun,
  GiBroadsword,
  GiMountaintop,
  GiPuzzle,
  GiCarWheel,
  GiChessKnight,
  GiSoccerBall,
} from "react-icons/gi";

function Sidebar({
  title,
  categoryClick,
  setSelectedGenres,
  isOpen,
  setOpen,
  setSelectedPlatform,
  setCurrentPlatform,
  setSlug,
}) {
  const API_KEY = "096cc99894964f3288aa6409f834a1ad";
  const [categorys, setCategorys] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const setGenre = (genre) => {
    setSelectedGenres(genre);
  };

  const setPlatform = (platform) => {
    setSelectedPlatform(platform);
  };

  const radi = () => {
    if (window.innerWidth >= 992) {
      setOpen(true);
    }
  };
  radi();

  const getMenu = async () => {
    try {
      const response = await fetch(
        `https://rawg.io/api/games?genres?parent_platforms?id=1&key=${API_KEY}`
      );
      const data = await response.json();
      setCategorys(data.results);
      setFiltered(data.results);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div
      className="SideBar"
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(-40vw) ",
        boxShadow: isOpen
          ? "14px 9px 15px -6px rgba(0, 0, 0, 0.75)"
          : "0 0 0 0 rgba(0, 0, 0, 0)",
      }}
    >
      <div className="new-relases" data-aos="fade-right" data-aos-delay="500">
        <div className="category">
          <h2>Genres</h2>
          <ul>
            <li data-aos="fade-right" data-aos-delay="400">
              <GiBroadsword
                className="btn-category"
                onClick={() => {
                  setGenre("action");
                  setOpen(false);
                  setSlug("");
                  setSelectedPlatform("");
                }}
              />{" "}
              <p> Action</p>
            </li>
            <li data-aos="fade-right" data-aos-delay="500">
              <GiMountaintop
                className="btn-category"
                onClick={() => {
                  setGenre("adventure");
                  setOpen(false);
                  setSlug("");
                  setSelectedPlatform("");
                }}
              />{" "}
              <p> Adventure</p>
            </li>
            <li data-aos="fade-right" data-aos-delay="600">
              <GiChessKnight
                className="btn-category"
                onClick={() => {
                  setGenre("arcade");
                  setOpen(false);
                  setSlug("");
                  setSelectedPlatform("");
                }}
              />{" "}
              <p>Arcade </p>
            </li>
            <li data-aos="fade-right" data-aos-delay="700">
              <GiSoccerBall
                className="btn-category"
                onClick={() => {
                  setGenre("sports");
                  setOpen(false);
                  setSlug("");
                  setSelectedPlatform("");
                }}
              />{" "}
              <p>Sports</p>
            </li>
            <li data-aos="fade-right" data-aos-delay="800">
              <GiPistolGun
                className="btn-category"
                onClick={() => {
                  setGenre("shooter");
                  setOpen(false);
                  setSlug("");
                  setSelectedPlatform("");
                }}
              />{" "}
              <p>Shooter</p>
            </li>
            <li data-aos="fade-right" data-aos-delay="900">
              <GiPuzzle
                className="btn-category"
                onClick={() => {
                  setGenre("puzzle");
                  setOpen(false);
                  setSlug("");
                  setSelectedPlatform("");
                }}
              />{" "}
              <p>Puzzle</p>
            </li>
            <li data-aos="fade-right" data-aos-delay="1000">
              <GiCarWheel
                className="btn-category"
                onClick={() => {
                  setGenre("racing");
                  setOpen(false);
                  setSlug("");
                  setSelectedPlatform("");
                }}
              />{" "}
              <p>Racing</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="platforms" data-aos="fade-right" data-aos-delay="1100">
        <div className="category">
          <h2>Platforms</h2>
          <ul>
            <li data-aos="fade-right" data-aos-delay="1200">
              <DiWindows
                className="btn-category"
                onClick={() => {
                  setPlatform("1");
                  setOpen(false);
                  setCurrentPlatform("PC");
                  setSlug("");
                  setSelectedGenres("");
                }}
              />{" "}
              <p>PC</p>
            </li>
            <li data-aos="fade-right" data-aos-delay="1300">
              <FaPlaystation
                className="btn-category"
                onClick={() => {
                  setPlatform("2");
                  setOpen(false);
                  setCurrentPlatform("PlayStation");
                  setSlug("");
                  setSelectedGenres("");
                }}
              />{" "}
              <p>PlayStation </p>
            </li>
            <li data-aos="fade-right" data-aos-delay="1400">
              <FaXbox
                className="btn-category"
                onClick={() => {
                  setPlatform("3");
                  setOpen(false);
                  setCurrentPlatform("Xbox");
                  setSlug("");
                  setSelectedGenres("");
                }}
              />{" "}
              <p>Xbox One</p>
            </li>
            <li>
              <SiNintendoswitch
                className="btn-category"
                onClick={() => {
                  setPlatform("7");
                  setOpen(false);
                  setCurrentPlatform("Nintendo");
                  setSlug("");
                  setSelectedGenres("");
                }}
              />{" "}
              <p>Nintendo Switch</p>
            </li>
            <li>
              <DiApple
                className="btn-category"
                onClick={() => {
                  setPlatform("5");
                  setOpen(false);
                  setCurrentPlatform("Apple");
                  setSlug("");
                  setSelectedGenres("");
                }}
              />{" "}
              <p>iOs</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
