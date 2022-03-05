import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

import { timeIntervals } from "../data";
import "../css/TimePicker.css";
import { useDateTime } from "../DateTimeContext";

const TimePicker = () => {
  const { dateTime, setDateTime } = useDateTime();
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const hanldeStartTime = (time) => {
    setStartTime(time);
    setDateTime((prevProps) => ({
      ...prevProps,
      startTime: time,
    }));
  };

  const handleEndTime = (time) => {
    setEndTime(time);
    setDateTime((prevProps) => ({
      ...prevProps,
      endTime: time,
    }));
  };

  console.log(dateTime);

  if (dateTime === null) {
    return (
      <div className="time_picker">
        <p>Pick a Date</p>
      </div>
    );
  }

  return (
    <div className="time_picker">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Start Time</Accordion.Header>
          <Accordion.Body
            style={{
              height: "21rem",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            {timeIntervals.map((item, index) => (
              <p
                key={index}
                onClick={() => hanldeStartTime(item)}
                className="time_stamps"
              >
                {item}
              </p>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>End Time</Accordion.Header>
          <Accordion.Body
            style={{
              height: "24rem",
              overflowY: "scroll",
              overflowX: "hidden",
              paddingBottom: "30px",
            }}
          >
            {timeIntervals
              .slice(timeIntervals.indexOf(startTime) + 1)
              .map((item, index) => (
                <p
                  key={index}
                  onClick={() => handleEndTime(item)}
                  className="time_stamps"
                >
                  {item}
                </p>
              ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TimePicker;
