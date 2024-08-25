import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCategory,useFilter } from "../../context";
import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
  const { hotelCategory, setHotelCategory } = useCategory();
  const {filterDispatch}=useFilter()
  const handleShowMoreRightClick = () => {
    setNumberOfCategoryToShow((prev) => prev + 10);
  };
  const handleShowMoreLeftClick = () => {
    setNumberOfCategoryToShow((prev) => prev - 10);
  };
  useEffect(() => {
    (async () => {
      try {
        //const { data } = await axios.get("http://localhost:3500/api/category");
        const { data } = await axios.get("https://travelappbackend-dnmq.onrender.com/api/category");
        const categoriesToShow = data.slice(
          numberOfCategoryToShow + 10 > data.length
            ? data.length - 10
            : numberOfCategoryToShow,
          numberOfCategoryToShow > data.length
            ? data.length
            : numberOfCategoryToShow + 10
        );
        setCategories(categoriesToShow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberOfCategoryToShow]);
  const handleCategoryClick = (category) => {
    //console.log({ category });
    setHotelCategory(category);
  };
  const handleFilterClick=()=>{
    filterDispatch({
      type:"SHOW_FILTER_MODAL"
    })
  }

  return (
    <section className="categories d-flex align-center gap-large cursor-pointer">
      {numberOfCategoryToShow >= 10 && (
        <button
          className="btn-left cursor-pointer"
          onClick={handleShowMoreLeftClick}
        >
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
      )}

      {categories &&
        categories.map(({ _id, category }) => (
          <span
            className={`${category === hotelCategory ? "border-bottom" : ""}`}
            key={_id}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      {numberOfCategoryToShow - 10 < categories.length && (
        <button
          className="btn-right cursor-pointer"
          onClick={handleShowMoreRightClick}
        >
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      )}
      <button className="button btn-filter d-flex align-center gap-small cursor-pointer fixed" onClick={handleFilterClick}>
        <span className="material-icons-outlined">filter_alt</span>
        <span>Filter</span>
      </button>
    </section>
  );
};
