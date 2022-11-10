import { faAngleRight, faAnglesRight, faAngleLeft, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Pagination = ({ pageClick, count, currentPage }) => {
  let totalPage = Math.ceil(count / 20);
  let pageGroup = Math.ceil(currentPage / 5);
  let lastPage = pageGroup * 5;
  if (lastPage > totalPage) {
    lastPage = totalPage;
  }
  // When the total number of pages is 5 or less, or when the last page group is 5 or less
  let firstPage = lastPage - 4 <= 0 ? 1 : lastPage - 4;

  let paginationHtml = [];
  let prev = firstPage - 1;
  let next = lastPage + 1;

  for (let i = firstPage; i <= lastPage; i++) {
    paginationHtml.push(
      <li className={currentPage === i ? "page-item active" : "page-item"} key={i}>
        <Link to={"/"} className="page-link pageNum" onClick={(event) => pageClick(i)}>
          {i}
        </Link>
      </li >
    );
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${firstPage === 1 ? "hidden" : ""}`}
            onClick={() => pageClick(1)}
          >
            <Link to={"/"} className="page-link">
              <FontAwesomeIcon icon={faAnglesLeft} />
            </Link>
          </li>
          <li
            className={`page-item ${firstPage === 1 ? "hidden" : ""}`}
            onClick={() => pageClick(prev)}
          >
            <Link to={"/"} className="page-link">
              <FontAwesomeIcon icon={faAngleLeft} />
            </Link>
          </li>
          {paginationHtml}
          <li
            className={`page-item ${lastPage === totalPage ? "hidden" : ""}`}
            onClick={() => pageClick(next)}
          >
            <Link to={"/"} className="page-link">
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </li>
          <li
            className={`page-item ${lastPage === totalPage ? "hidden" : ""}`}
            onClick={() => pageClick(totalPage)}
          >
            <Link to={"/"} className="page-link">
              <FontAwesomeIcon icon={faAnglesRight} />
            </Link>
          </li>
        </ul>
      </nav>
    </div >
  );
};

export default Pagination;
