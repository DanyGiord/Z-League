import { useEffect, useState } from "react";
import Game from "./Game";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";
import Pagination from "./Pagination";
import Header from "./Header";
import Sidebar from "./Sidebar";



function Home() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [games, setGames] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [slug, setSlug] = useState("");
  const [sideState, setSideState] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState("")
  const [selectedPlatform, setSelectedPlatform] = useState("")
  const [isOpen, setOpen] = useState(false)
  const [currentPlatform, setCurrentPlatform] = useState("")

  const [cart, setCart] = useState([]);

  const handleClick = (game) => {
    setCart([...cart, game])
    console.log(cart)
  }

  const genres_url = selectedGenres.length > 0 ? `&genres=${selectedGenres}` : ''
  const platforms_url = selectedPlatform.length > 0 ? `&parent_platforms=${selectedPlatform}` : ''
  console.log(genres_url)
  console.log(platforms_url)


  const API_KEY = "096cc99894964f3288aa6409f834a1ad";

  const getGames = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?${category}${genres_url}${platforms_url}&page=${currentPage}&search=${slug}&page_size=20&key=${API_KEY}`
      );

      const data = await response.json();
      setGames(data.results);
      setCount(data.count);
      setLoading(false);
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };


  function pageMove(page) {
    setCurrentPage(page);
  }

  function inputValue(value) {
    setSlug(value);
    console.log(value)
  }

  function homeClick(event) {
    event.preventDefault();
    setSlug("");
    setCategory("")
    toggle();
    setCurrentPage(1);
  }

  function headerHomeClick(event) {
    event.preventDefault();
    setSlug("");
    setCategory("")
    setCurrentPage(1);
    setSelectedGenres("")
    setCurrentPlatform("")
    setSelectedPlatform("")
  }

  /* api empty query parameter */

  function categoryClick(e, param) {
    e.preventDefault();
    setCategory(`genres=${param.slug}`);
    setSlug(param.slug);
    toggle();
    console.log(category);
  }

  useEffect(() => {
    getGames();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    // console.log(currentPage);
  }, [currentPage, slug, category, selectedGenres, selectedPlatform, currentPlatform]);


  function toggle() {
    setSideState((prev) => !prev);
  }

  return (
    <div>
      <Sidebar
        setSelectedGenres={setSelectedGenres}
        isOpen={isOpen}
        setOpen={setOpen}
        setSelectedPlatform={setSelectedPlatform}
        setCurrentPlatform={setCurrentPlatform}
        setSlug={setSlug}
      />
      <Header
        count={count}
        inputValue={inputValue}
        homeClick={homeClick}
        headerHomeClick={headerHomeClick}
        categoryClick={categoryClick}
        toggleClick={toggle}
        sideState={sideState}
        setSelectedGenres={setSelectedGenres}
        setOpen={setOpen}
        isOpen={isOpen}
        setSelectedPlatform={setSelectedPlatform}
        setCurrentPlatform={setCurrentPlatform}
        setSlug={setSlug}
      />
      <div className="home container">
        {loading ? (
          <div className="loading">
            <h1>Loading...</h1>
            <div className="fa-3x">
              <FontAwesomeIcon icon={faSpinner} spin style={{ color: "white" }} />
            </div>
          </div>
        ) : (
          <h2 className="main-title" data-aos="fade-up">

            {(function () {
              if (slug !== "") {
                return `${slug} results...`
              } else if (selectedGenres.length > 0) {
                return `${selectedGenres.charAt(0).toUpperCase() + selectedGenres.slice(1).toLowerCase()}`
              } else if (currentPlatform.length > 0) {
                return `${currentPlatform}`
              }
            }())}

            {/* {slug !== "" ? `${slug} results...` : `${selectedGenres.charAt(0).toUpperCase() + selectedGenres.slice(1).toLowerCase()}` 
            ? `${selectedGenres.charAt(0).toUpperCase() + selectedGenres.slice(1).toLowerCase()}` : currentPlatform} */}
          </h2>

        )}
        <main>

          <div className="game-container">
            {games.map((game) => {
              console.log(game)
              return (
                <Game
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  image={game.background_image}
                  genres={game.genres}
                  platforms={game.parent_platforms}
                  metacriticScore={game.metacritic}
                  released={game.released}
                  game={game}
                  handleClick={handleClick}
                />
              );
            })}

          </div>
        </main>
        {loading ? null : (
          <Pagination smooth pageClick={pageMove} count={count} currentPage={currentPage} />
        )}
      </div>

      <ScrollToTop smooth color="#28FFB1" style={{ backgroundColor: 'rgba(59, 59, 59)' }} />

    </div>
  );
}

export default Home;
