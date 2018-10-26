//inspired by this MDN article https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date

// define variables
let pickerContainer = null;

let yearSelect = null;
let monthSelect = null;
let daySelect = null;

//preserve day selection
let previousDay;

function populateDays(month) {
  // delete the current set of <option> elements out of the
  // day <select>, ready for the next set to be injected
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }

  // Create variable to hold new number of days to inject
  var dayNum;

  // 31 or 30 days?
  if (
    month === 'January' ||
    month === 'March' ||
    month === 'May' ||
    month === 'July' ||
    month === 'August' ||
    month === 'October' ||
    month === 'December'
  ) {
    dayNum = 31;
  } else if (
    month === 'April' ||
    month === 'June' ||
    month === 'September' ||
    month === 'November'
  ) {
    dayNum = 30;
  } else {
    // If month is February, calculate whether it is a leap year or not
    var year = yearSelect.value;
    var leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    dayNum = leap ? 29 : 28;
  }

  // inject the right number of new <option> elements into the day <select>
  for (let i = 1; i <= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // if previous day has already been set, set daySelect's value
  // to that day, to avoid the day jumping back to 1 when you
  // change the year
  if (previousDay) {
    daySelect.value = previousDay;

    // If the previous day was set to a high number, say 31, and then
    // you chose a month with less total days in it (e.g. February),
    // this part of the code ensures that the highest day available
    // is selected, rather than showing a blank daySelect
    if (daySelect.value === '') {
      daySelect.value = previousDay - 1;
    }

    if (daySelect.value === '') {
      daySelect.value = previousDay - 2;
    }

    if (daySelect.value === '') {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // get this year as a number
  var date = new Date();
  var year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for (var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}

function buildDateSelector(labelText) {
  return `<fieldset >
            <legend>${labelText}</legend>
            <span>
                <label for="day">Day:</label>
                <select id="day" name="day">
                </select>
            </span>
            <span>
                <label for="month">Month:</label>
                <select id="month" name="month">
                    <option selected>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
            </span>
            <span>
                <label for="year">Year:</label>
                <select id="year" name="year">
                </select>
            </span>
        </fieldset>`;
}

export default function datePicker(className, labelText) {
  pickerContainer = document.querySelector(className);
  // test whether a new date input falls back to a text input or not
  let test = document.createElement('input');
  test.type = 'date';
  // if it does, run the code inside the if() {} block
  if (test.type === 'text') {
    // remove the native picker and show the fallback
    pickerContainer.innerHTML = buildDateSelector(labelText);
    yearSelect = document.querySelector('#year');
    monthSelect = document.querySelector('#month');
    daySelect = document.querySelector('#day');
    // populate the days and years dynamically
    // (the months are always the same, therefore hardcoded)
    populateDays(monthSelect.value);
    populateYears();

    // when the month or year <select> values are changed, rerun populateDays()
    // in case the change affected the number of available days
    yearSelect.onchange = function() {
      populateDays(monthSelect.value);
    };

    monthSelect.onchange = function() {
      populateDays(monthSelect.value);
    };

    // update what day has been set to previously
    // see end of populateDays() for usage
    daySelect.onchange = function() {
      previousDay = daySelect.value;
    };
  }
}
