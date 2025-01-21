import { Link } from "react-router-dom";
const CollegeCard = ({ item }) => {
  return (
    <>
      <div className="courses__item-two shine__animate-item">
        <div className="courses__item-two-thumb">
          <Link to={`/course/${item.id}`} className="shine__animate-link">
            <img src={new URL(`../../assets/img/courses/course_thumb01.jpg`, import.meta.url).href} alt="img" />
          </Link>
          <div className="author">
            <Link to={`/course/${item.id}`}>
              <img src={new URL(`../../assets/img/courses/course_author001.png`, import.meta.url).href} alt="img" />
            </Link>
          </div>
        </div>
        <div className="courses__item-two-content">
          <Link
            to="#"
            className="courses__item-tag"
            style={{ backgroundColor: "#E8F9EF", color: "#04BC53" }}
          >
            {item.collegeName}
          </Link>
          <h5 className="title">
            <Link to={`/course/${item.id}`}>
              {item.courseName}
            </Link>
          </h5>
          <ul className="courses__item-meta list-wrap">
            <li>
              <i className="flaticon-file" /> 05
            </li>
            <li>
              <i className="flaticon-timer" /> 12h 30m
            </li>
            <li>
              <i className="flaticon-user-1" /> 35
            </li>
          </ul>
          <div className="courses__item-bottom">
            <div className="course__price">
              <h3 className="price">$29.00</h3>
            </div>
            <div className="courses__item-rating">
              <i className="fas fa-star" />
              <span className="rating-count">(4.2)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeCard;
