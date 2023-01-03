const arrival_date_picker_element = document.getElementById(
  "date-picker-arrival"
);
const arrival_selected_date_element = document.getElementById(
  "selected-date-arrival"
);
const arrival_dates_element = document.getElementById("arrival-dates");
const arrival_mth_element = document.getElementById("arrival-mth");
const arrival_next_mth_element = document.getElementById("arrival-next-mth");
const arrival_prev_mth_element = document.getElementById("arrival-prev-mth");
const arrival_days_element = document.getElementById("arrival-days");

const departure_date_picker_element = document.getElementById(
  "date-picker-departure"
);
const departure_selected_date_element = document.getElementById(
  "selected-date-departure"
);
const departure_dates_element = document.getElementById("departure-dates");
const departure_mth_element = document.getElementById("departure-mth");
const departure_next_mth_element =
  document.getElementById("departure-next-mth");
const departure_prev_mth_element =
  document.getElementById("departure-prev-mth");
const departure_days_element = document.getElementById("departure-days");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let departureClicked = false;
function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}
let arrdate = new Date();
let arrday = arrdate.getDate();
let arrmonth = arrdate.getMonth();
let arryear = arrdate.getFullYear();
let arrselectedDate = arrdate;
let arrselectedDay = arrday;
let arrselectedMonth = arrmonth;
let arrselectedYear = arryear;
let arrtoday = arrday;
let arrcurrentMonth = arrmonth;
let arrcurrentYear = arryear;
let depdate = new Date();
let depday = depdate.getDate();
let depmonth = depdate.getMonth();
let depyear = depdate.getFullYear();
let depselectedDate = depdate;
let depselectedDay = depday;
let depselectedMonth = depmonth;
let depselectedYear = depyear;
const select_container = document.getElementById("select-container");
const select_destination = document.getElementById("destination");
const list_destination = document.getElementById("list");
const destination_names = document.querySelectorAll(".list-container li");

// EVENT LISTENERS
select_container.addEventListener("click", toggleDestination);
arrival_date_picker_element.addEventListener("click", toggleDatePickerArrival);
arrival_next_mth_element.addEventListener("click", goToNextMonthArrival);
arrival_prev_mth_element.addEventListener("click", goToPrevMonthArrival);

// FUNCTIONS
function toggleDestination(e) {
    list_destination.classList.toggle("list-display");
    for(destination of destination_names){
      destination.onclick = function(){
        select_destination.textContent = this.textContent;
        select_destination.dataset.value = this.textContent;
      }
      if (destination.textContent===select_destination.textContent) {
        destination.classList.add("selected-destination");
      }
      else{
        destination.classList.remove("selected-destination");
      }
    }
}
function toggleDatePickerArrival(e) {
  if (!checkEventPathForClass(e.path, "dates")) {
    arrival_dates_element.classList.toggle("active");
    departure_dates_element.classList.remove("active");
    arrmonth = arrselectedMonth;
    arryear = arrselectedYear;
    arrival_selected_date_element.textContent = formatDate(arrselectedDate);
    arrival_selected_date_element.dataset.value = arrselectedDate;
    arrival_mth_element.textContent = months[arrmonth] + " " + arryear;
    populateDatesArrival();
  }
}

function goToNextMonthArrival(e) {
  arrmonth++;
  if (arrmonth > 11) {
    arrmonth = 0;
    arryear++;
  }
  arrival_mth_element.textContent = months[arrmonth] + " " + arryear;
  populateDatesArrival();
}

function goToPrevMonthArrival(e) {
  arrmonth--;
  if (arrmonth < 0) {
    arrmonth = 11;
    arryear--;
  }
  arrival_mth_element.textContent = months[arrmonth] + " " + arryear;
  populateDatesArrival();
}

function populateDatesArrival(e) {
  arrival_days_element.innerHTML = "";
  let LeapYear = isLeapYear(arryear);

  let amount_days = 31;

  if (arrmonth == 1 && !LeapYear) {
    amount_days = 28;
  } else if (arrmonth == 1 && LeapYear) {
    amount_days = 29;
  } else if (
    arrmonth == 3 ||
    arrmonth == 5 ||
    arrmonth == 8 ||
    arrmonth == 10
  ) {
    amount_days = 30;
  }
  for (let i = 0; i < amount_days; i++) {
    const day_element = document.createElement("div");
    day_element.classList.add("day");
    day_element.textContent = i + 1;

    if (
      arrselectedDay == i + 1 &&
      arrselectedYear == arryear &&
      arrselectedMonth == arrmonth
    ) {
      day_element.classList.add("selected");
    } else if (
      arrcurrentMonth > arrmonth ||
      arrcurrentYear > arryear ||
      (arrtoday > i + 1 &&
        arrcurrentMonth == arrmonth &&
        arrcurrentYear == arryear)
    ) {
      day_element.classList.add("disabled");
    } else {
      day_element.addEventListener("click", function () {
        arrselectedDate = new Date(
          arryear + "-" + (arrmonth + 1) + "-" + (i + 1)
        );
        arrselectedDay = i + 1;
        arrselectedMonth = arrmonth;
        arrselectedYear = arryear;

        arrival_selected_date_element.textContent = formatDate(arrselectedDate);
        arrival_selected_date_element.dataset.value = arrselectedDate;
        populateDatesArrival();
        if ((arrselectedMonth>depselectedMonth || arrselectedYear>depselectedYear || (arrselectedDay>depselectedDay && arrselectedMonth==depselectedMonth && arrselectedYear==depselectedYear)) && departureClicked) {
          departure_selected_date_element.textContent = formatDate(arrselectedDate);
          departure_selected_date_element.dataset.value = arrselectedDate;
          departure_mth_element.textContent = months[arrmonth] + " " + arryear;
        }
      });
    }

    arrival_days_element.appendChild(day_element);
  }
}

// EVENT LISTENERS
departure_date_picker_element.addEventListener(
  "click",
  toggleDatePickerDeparture
);
departure_next_mth_element.addEventListener("click", goToNextMonthDeparture);
departure_prev_mth_element.addEventListener("click", goToPrevMonthDeparture);

// FUNCTIONS
function toggleDatePickerDeparture(e) {
  if (!checkEventPathForClass(e.path, "dates")) {
    departure_dates_element.classList.toggle("active");
    arrival_dates_element.classList.remove("active");

    depmonth = depselectedMonth;
    depyear = depselectedYear;
    departure_selected_date_element.textContent = formatDate(depselectedDate);
    departure_selected_date_element.dataset.value = depselectedDate;
    departure_mth_element.textContent = months[depmonth] + " " + depyear;
    populateDatesDeparture();
  }
}

function goToNextMonthDeparture(e) {
  depmonth++;
  if (depmonth > 11) {
    depmonth = 0;
    depyear++;
  }
  departure_mth_element.textContent = months[depmonth] + " " + depyear;
  populateDatesDeparture();
}

function goToPrevMonthDeparture(e) {
  depmonth--;
  if (depmonth < 0) {
    depmonth = 11;
    depyear--;
  }
  departure_mth_element.textContent = months[depmonth] + " " + depyear;
  populateDatesDeparture();
}

function populateDatesDeparture(e) {
  departureClicked = true;
  departure_days_element.innerHTML = "";
  let deptoday = arrselectedDay;
  let depcurrentMonth = arrselectedMonth;
  let depcurrentYear = arrselectedYear;
  let LeapYear = isLeapYear(depyear);
  if (arrselectedMonth>depselectedMonth || arrselectedYear>depselectedYear || (arrselectedDay>depselectedDay && arrselectedMonth==depselectedMonth && arrselectedYear==depselectedYear)) {
    depselectedDay = arrselectedDay;
    depselectedMonth = arrselectedMonth;
    depselectedYear = arrselectedYear;
    depmonth = arrmonth;
    depyear = arryear;
    departure_selected_date_element.textContent = formatDate(arrselectedDate);
    departure_selected_date_element.dataset.value = arrselectedDate;
    departure_mth_element.textContent = months[arrmonth] + " " + arryear;
  }
  let amount_days = 31;

  if (depmonth == 1 && !LeapYear) {
    amount_days = 28;
  } else if (depmonth == 1 && LeapYear) {
    amount_days = 29;
  } else if (
    depmonth == 3 ||
    depmonth == 5 ||
    depmonth == 8 ||
    depmonth == 10
  ) {
    amount_days = 30;
  }
  for (let i = 0; i < amount_days; i++) {
    const day_element = document.createElement("div");
    day_element.classList.add("day");
    day_element.textContent = i + 1;

    if (
      depselectedDay == i + 1 &&
      depselectedYear == depyear &&
      depselectedMonth == depmonth
    ) {
      day_element.classList.add("selected");
    } else if (
      depcurrentMonth > depmonth ||
      depcurrentYear > depyear ||
      (deptoday > i + 1 &&
        depcurrentMonth == depmonth &&
        depcurrentYear == depyear)
    ) {
      day_element.classList.add("disabled");
    } else {
      day_element.addEventListener("click", function () {
        depselectedDate = new Date(
          depyear + "-" + (depmonth + 1) + "-" + (i + 1)
        );
        depselectedDay = i + 1;
        depselectedMonth = depmonth;
        depselectedYear = depyear;

        departure_selected_date_element.textContent =
          formatDate(depselectedDate);
        departure_selected_date_element.dataset.value = depselectedDate;
        populateDatesDeparture();
      });
    }

    departure_days_element.appendChild(day_element);
  }
}
// HELPER FUNCTIONS
function checkEventPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }

  return false;
}
function formatDate(d) {
  let day = d.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  let month = d.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  let year = d.getFullYear();

  // return day + " / " + month + " / " + year;
  return d.toDateString();
}
