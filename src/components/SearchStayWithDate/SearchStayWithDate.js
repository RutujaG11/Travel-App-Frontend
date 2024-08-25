import { DateSelector } from "../DateSelector/DateSelector";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchStayWithDate.css";
import { useDate, useCategory } from "../../context";
import { useNavigate } from "react-router-dom";

export const SearchStayWithDate = () => {
  const [hotels, setHotels] = useState([]);
  const { destination, guests, dateDispatch, isSearchResultOpen } = useDate();
  const navigate=useNavigate()
  const { hotelCategory } = useCategory();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3500/api/hotels?category=${hotelCategory}`
        );
        setHotels(data);
        
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);
  
  const handleDestinationChange = (event) => {
    dateDispatch({
      type: "DESTINATION",
      payload: event.target.value,
    });
  };
  const handleGuestChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };
  const handleSearchResultClick = (address) => {
    dateDispatch({
      type: "DESTINATION",
      payload: address,
    });
  };
  const handleDestinationFocus = () => {
    dateDispatch({
      type: "SHOW_SEARCH_RESULT",
    });
  };
  const destinationOptions = hotels.filter(
    ({ address, city, state, country }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase()) ||
      country.toLowerCase().includes(destination.toLowerCase())
  );
 const handleSearchButtonClick=()=>{
  dateDispatch({
    type: "CLOSE_SEARCH_MODAL"
  })
  navigate(`/hotels/${destination}`)
 }
  return (
    <div className="destination-container">
      <div className="destination-options d-flex align-center absolute">
        <div className="location-container">
          <label className="label">Where</label>
          <input
            value={destination}
            onChange={handleDestinationChange}
            onFocus={handleDestinationFocus}
            className="input search-dest"
            placeholder="Search Destination"
            autoFocus
          />
        </div>
        <div className="location-container">
          <label className="label">Check in</label>
          <DateSelector checkInType="in" />
        </div>
        <div className="location-container">
          <label className="label">Check out</label>
          <DateSelector checkOutType="out" />
        </div>
        <div className="location-container">
          <label className="label">No. of Guests</label>
          <input
            value={guests}
            className="input search-dest"
            placeholder="Add Guests"
            onChange={handleGuestChange}
          />
        </div>
        <div className="search-container d-flex align-center cursor" onClick={handleSearchButtonClick}>
          <span className="material-icons-outlined">search</span>
          <span>Search</span>
        </div>
      </div>
      {isSearchResultOpen && (
        <div className="search-result-container absolute">
          {destinationOptions &&
            destinationOptions.map(({ address, city }) => (
              <p
                className="p cursor-pointer"
                onClick={()=>handleSearchResultClick(address)}
              >
                {address},{city}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};
