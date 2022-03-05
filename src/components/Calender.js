import React, { useState } from "react";
// import from 'react-icons'

import "../css/Calender.css";
import { useDateTime } from "../DateTimeContext";

const date = new Date();

const MONTHS = [
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

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());

  const { dateTime, setDateTime } = useDateTime();

  let lastDayOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  let lastDayOfPreviousMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  let lastMonthDays = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  let nextMonthDays =
    6 - new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  lastDayOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  lastDayOfPreviousMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  lastMonthDays = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  nextMonthDays =
    6 - new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const handlePreviousMonth = () => {
    date.setMonth(date.getMonth() - 1);
    setCurrentMonth(date.getMonth());
  };
  const handleNextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    setCurrentMonth(date.getMonth());
  };
  const handleSelect = (date, index) => {
    date.setDate(index);
    setSelectedDate(index);
    setDateTime((prevProps) => ({
      ...prevProps,
      date,
    }));
  };

  return (
    <div className="calendar">
      <div className="month">
        <i onClick={handlePreviousMonth} className="fas fa-angle-left prev"></i>
        <div className="date">
          <h1>{MONTHS[date.getMonth()]}</h1>
          <p>{date.toDateString()}</p>
        </div>
        <i onClick={handleNextMonth} className="fas fa-angle-right next"></i>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="days">
        {/* Previous Month Days */}
        {[...Array(lastMonthDays).fill(0)].map((_, index) => (
          <div className="prev-date">
            {lastDayOfPreviousMonth - lastMonthDays + index + 1}
          </div>
        ))}
        {/* Current Month Days */}
        {[...Array(lastDayOfCurrentMonth).fill(0)].map((_, index) => {
          if (
            index + 1 === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
          ) {
            return (
              <div
                onClick={() => handleSelect(date, index + 1)}
                className="today"
                className={index + 1 === date.getDate() ? "selected" : ""}
              >
                {index + 1}{" "}
              </div>
            );
          } else {
            return (
              <div
                onClick={() => handleSelect(date, index + 1)}
                className={index + 1 === selectedDate ? "selected" : ""}
              >
                {index + 1}{" "}
              </div>
            );
          }
        })}
        {/* Next Moth Days */}

        {[...Array(nextMonthDays).fill(0)].map((_, index) => (
          <div className="next-date">{index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
