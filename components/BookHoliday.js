import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";
import moment from "moment";
const BookHoliday = () => {
  var yesterday = moment().subtract(1, "day");
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  var Arrivalvalid = function (current) {
    return current.isAfter(yesterday);
  };
  var Departurevalid = function (current) {
    if (arrivalDate !== null) {
      return current >= arrivalDate;
    } else {
      return current.isAfter(yesterday);
    }
  };
  return (
    <div className="book-holiday">
      <h2>Book Holiday Now!</h2>
      <div className="form-container">
        <div className="input-container">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Your Destination"
          />
          <div className="icon" id="search-icon">
            {" "}
            <AiOutlineSearch color="#bd7457" fontSize={20} />
          </div>
        </div>
        <div className="input-container">
          <Datetime
            timeFormat={false}
            dateFormat="DD MMM YYYY"
            isValidDate={Arrivalvalid}
            value={arrivalDate}
            onChange={(e) => {
              setArrivalDate(e);
              if (departureDate !== null && e > departureDate) {
                setDepartureDate(e);
              }
            }}
            inputProps={{ placeholder: "Arrival", readOnly: true }}
          />{" "}
          <div className="icon pointer" id="a-icon">
            {" "}
            <AiFillCalendar color="#bd7457" fontSize={20} />
          </div>
        </div>
        <div className="input-container">
          <Datetime
            timeFormat={false}
            dateFormat="DD MMM YYYY"
            isValidDate={Departurevalid}
            value={departureDate}
            onChange={(e) => {
              setDepartureDate(e);
            }}
            inputProps={{ placeholder: "Departure", readOnly: true }}
          />{" "}
          <div className="icon pointer" id="d-icon">
            {" "}
            <AiFillCalendar color="#bd7457" fontSize={20} />
          </div>
        </div>
        <button id="search-btn">Search</button>
      </div>
    </div>
  );
};

export default BookHoliday;
