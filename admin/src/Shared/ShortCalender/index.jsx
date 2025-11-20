import { useState } from "react";
import { Rarrow, Larrow } from "../Icons";
import { AppShortCalendarContainer } from "./style";

export const ShortCalender = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const generateDates = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const isToday = (day) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = generateDates();

  return (
    <AppShortCalendarContainer>
      <div className="calendar-header">
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <div className="cal_arrow">
          <button onClick={handlePrevMonth}>
            <Larrow />
          </button>
          <button onClick={handleNextMonth}>
            <Rarrow />
          </button>
        </div>
      </div>
      <div className="calendar-grid">
        {dayNames.map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}
        {dates.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${isToday(day) ? "today" : ""}`}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </AppShortCalendarContainer>
  );
};
