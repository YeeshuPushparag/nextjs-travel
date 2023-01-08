import Script from "next/script";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";

const BookHoliday = () => {
  return (
    <>
    <div className="book-holiday" id="book-now">
      <h2>Book Holiday Now!</h2>
      <div className="form-container">
        <div className="select-container" id="select-container">
        <div className="icon" id="search-icon">
            <AiOutlineSearch color="#bd7457" fontSize={20} />
          </div>
        <div name="destination" id="destination" className="select-destination">Choose Your Destination</div>
        <ul id="list" className="list-container list-display">
          <li>London</li>
          <li>Paris</li>
          <li>Rome</li>
          <li>Madrid</li>
          <li>Switzerland</li>
          <li>Greece</li>
          <li>India</li>
          <li>Dubai</li>
          <li>Caribbean</li>
          <li>Maldives</li>
        </ul>
        </div>
        <div className="date-picker" id="date-picker-arrival">
        <div className="icon" id="d-icon">
            <AiFillCalendar color="#bd7457" fontSize={20} />
          </div>
		<div className="selected-date" id="selected-date-arrival">Arrival Date</div>

		<div className="dates" id="arrival-dates">
			<div className="month">
				<div className="arrows prev-mth" id="arrival-prev-mth">&lt;</div>
				<div className="mth" id="arrival-mth"></div>
				<div className="arrows next-mth" id="arrival-next-mth">&gt;</div>
			</div>

			<div className="days" id="arrival-days"></div>
		</div>
	</div>
        <div className="date-picker" id="date-picker-departure">
        <div className="icon" id="d-icon">
            <AiFillCalendar color="#bd7457" fontSize={20} />
          </div>
		<div className="selected-date" id="selected-date-departure">Departure Date</div>

		<div className="dates" id="departure-dates">
			<div className="month">
				<div className="arrows prev-mth" id="departure-prev-mth">&lt;</div>
				<div className="mth" id="departure-mth"></div>
				<div className="arrows next-mth" id="departure-next-mth">&gt;</div>
			</div>

			<div className="days" id="departure-days"></div>
		</div>
	</div>
    
        <button id="search-btn">Book Now</button>
      </div>
    </div>
    <Script src="/booktravel.js"  strategy="lazyOnload"></Script>
    </>
  );
};

export default BookHoliday;
