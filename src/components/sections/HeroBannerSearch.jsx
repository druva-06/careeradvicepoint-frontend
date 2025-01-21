import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import educationDetails from "../../utils/education-details.json";
import SignUpModal from "../modal/SignUpModal";
import AbroadMarksModal from "../modal/AbroadMarksModal";
import { updateFilters } from "../../features/search/collegeCourseSearchSlice";
import axios from "axios";
import { setCollegeCourseData } from "../../features/data/collegeCourseDataSlice";

export default function HeroBannerSearch({ currentActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const collegeCourses = useSelector((state) => state.collegeCourseSearch);
  const { filters } = collegeCourses;
  console.log("filters", filters);

  const handleSelectChange = (e) => {
    const optionType = e.target.options[0].text;
    if (optionType === "Country") {
      dispatch(updateFilters({ countries: [e.target.value] }));
    }
    if (optionType === "Department") {
      dispatch(updateFilters({ departments: [e.target.value] }));
    }
    if (optionType === "Graduation Level") {
      dispatch(updateFilters({ graduation_levels: [e.target.value] }));
    }
  };

  const fetchUsers = async () => {
    try {
      console.log("collegeCourses", collegeCourses);

      const response = await axios.post(
        "http://82.112.234.51/api/college-course/collegeCourses",
        collegeCourses,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(setCollegeCourseData(response.data));
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      console.log("Done fetching users");
    }
  };

  return (
    <>
      <div className="row filter__content">
        <span className="text-center mb-20">{currentActive.title}</span>
        <div className="row text-center gap-2">
          <select
            className="col-12 col-lg filter__select"
            defaultValue={
              filters.countries.length == 0
                ? currentActive.id === "study-abroad"
                  ? "Country"
                  : "City"
                : filters.countries[filters.countries.length - 1]
            }
            onChange={handleSelectChange}
          >
            {currentActive.id === "study-abroad" ? (
              <option key="location" disabled>
                Country
              </option>
            ) : (
              <option key="location" disabled>
                City
              </option>
            )}
            {currentActive.id === "study-abroad"
              ? educationDetails[currentActive.id].country.map((item) => (
                  <option key={item.id}>{item.name}</option>
                ))
              : educationDetails[currentActive.id].city.map((item) => (
                  <option key={item.id}>{item.name}</option>
                ))}
          </select>
          <select
            className="col-12 col-lg filter__select"
            defaultValue={
              filters.departments.length == 0
                ? "Department"
                : filters.departments[filters.departments.length - 1]
            }
            onChange={handleSelectChange}
          >
            <option key="department" disabled>
              Department
            </option>
            {educationDetails[currentActive.id].department.map((item) => (
              <option key={item.id}>{item.name}</option>
            ))}
          </select>
          {/* <select
            className="col-12 col-lg filter__select"
            defaultValue="Specialization"
          >
            <option key="specializations" disabled>
              Specialization
            </option>
            {educationDetails[currentActive.id].specializations.map((item) => (
              <option key={item.id}>{item.name}</option>
            ))}
          </select> */}
          <select
            className="col-12 col-lg filter__select"
            defaultValue={
              filters.graduation_levels.length == 0
                ? "Graduation Level"
                : filters.graduation_levels[
                    filters.graduation_levels.length - 1
                  ]
            }
            onChange={handleSelectChange}
          >
            <option key="education-type" disabled>
              Graduation Level
            </option>
            {educationDetails[currentActive.id].levelOfEducation.map((item) => (
              <option key={item.id}>{item.name}</option>
            ))}
          </select>
          <button
            onClick={() => {
              fetchUsers();
              navigate("/study-abroad");
            }}
            className="col-12 col-lg filter__button"
          >
            <span>Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
      </div>
      {openModal && <AbroadMarksModal setOpenModal={setOpenModal} />}
    </>
  );
}
