import React, { useState } from "react";
import { AiFillCalendar } from "react-icons/ai";
import { Modal } from "react-bootstrap";

import Calender from "./Calender";
import TimePicker from "./TimePicker";

const DatePicker = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleExit = () => {
    setIsFocused(false);
  };

  return (
    <div className="input-container d-flex my-3" style={{ fontSize: "30px" }}>
      <label for="ContactName">
        <div className="form_icons ">
          <AiFillCalendar style={{ fontSize: "30px" }} />
          <span className="label_font" style={{ fontSize: "30px" }}>
            Date & Time
          </span>
        </div>
      </label>
      <input
        id="ContactName"
        onClick={() => setIsFocused(true)}
        className="hosted_by date_picker_input"
        type="text"
        placeholder="Date and Time"
        name="email"
        htmlFor=""
      />
      <Modal
        show={isFocused}
        onExit={handleExit}
        onHide={() => setIsFocused(false)}
        className="date_picker"
      >
        <Calender />
        <TimePicker />
      </Modal>
    </div>
  );
};

export default DatePicker;
