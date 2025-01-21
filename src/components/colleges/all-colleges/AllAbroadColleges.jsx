import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPerPage,
  addSort,
  clearCountry,
  clearCourse,
  clearSpecializations,
  clearIntake,
} from "../../../features/abroadEducation/abroadEducationFilterSlice";
import {
  clearCountryToggle,
  clearCourseToggle,
  clearSpecializationsToggle,
  clearIntakeToggle,
} from "../../../features/abroadEducation/abroadEducationSlice";
import CollegeCard from "../CollegeCard";

const AllColleges = () => {
  const [colleges, setColleges] = useState([]);
  const { response } = useSelector((state) => state.collegeCourseData);

  let content = response?.data.map((item) => (
    <div className="col" key={item.collegeCourseId}>
      <CollegeCard item={item} />
    </div>
  ));

  return (
    <>
      <div className="shop-top-wrap courses-top-wrap">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="shop-top-left">
              <p>We found {response?.pagination.totalItems} courses for you</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center">
              <div>
                {/* {country?.length !== 0 ||
                course?.length !== 0 ||
                specializations?.length !== 0 ||
                intake?.length !== 0 ||
                sort !== "" ||
                perPage.start !== 0 ||
                perPage.end !== 0 ? (
                  <button
                    onClick={clearAll}
                    className="btn btn-reset text-nowrap me-2"
                  >
                    Reset
                  </button>
                ) : undefined} */}
              </div>
              <div className="shop-top-right m-0 ms-md-auto">
                <select
                  // value={sort}
                  name="orderby"
                  className="orderby"
                  // onChange={sortHandler}
                >
                  <option value="">Sort by (default)</option>
                  <option value="asc">Newest</option>
                  <option value="des">Oldest</option>
                </select>
              </div>
              <div>
                <select
                  // onChange={perPageHandler}
                  className="chosen-single form-select ms-3 "
                  // value={JSON.stringify(perPage)}
                >
                  <option
                    value={JSON.stringify({
                      start: 0,
                      end: 0,
                    })}
                  >
                    All
                  </option>
                  <option
                    value={JSON.stringify({
                      start: 0,
                      end: 10,
                    })}
                  >
                    10 per page
                  </option>
                  <option
                    value={JSON.stringify({
                      start: 0,
                      end: 20,
                    })}
                  >
                    20 per page
                  </option>
                  <option
                    value={JSON.stringify({
                      start: 0,
                      end: 30,
                    })}
                  >
                    30 per page
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
        {content}
      </div>
    </>
  );
};

export default AllColleges;
