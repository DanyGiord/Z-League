import { useState } from "react";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search({ count, inputValue }) {
  const [input, setInput] = useState("");
  const [mark, setMark] = useState(false);

  function handleChange(event) {
    setInput(event.target.value);
    setMark(true);
  }

  function onSubmit(event) {
    event.preventDefault();
    inputValue(input);
    setInput("");
  }

  function deleteInput(event) {
    event.preventDefault();
    setInput("");
    setMark(false);
  }
  return (
    <div className="game-search" data-aos="fade-in" data-aos-delay="500">
      <form onSubmit={onSubmit}>
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <input
          value={input}
          type="text"
          onChange={handleChange}
          placeholder={`Search ${count} games`}
        ></input>
        {mark ? (
          <FontAwesomeIcon
            className="xmark-icon"
            icon={faXmark}
            onClick={deleteInput}
          />
        ) : null}
      </form>
    </div>
  );
}

export default Search;
