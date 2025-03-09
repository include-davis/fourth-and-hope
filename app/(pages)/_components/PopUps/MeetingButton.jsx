"use client";

import React, { useState } from "react";
import styles from "./PopUps.module.scss";

const boardMeetings = [
  { year: 2022, months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov"] },
  { year: 2023, months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }
];

export default function MeetingButton({ children }) {
  const [isBoardOpen, setBoardOpen] = useState(false);
  const toggleBoardPopup = () => setBoardOpen(!isBoardOpen);

  return (
    <>
      <span onClick={toggleBoardPopup} style={{ cursor: "pointer" }}>
        {children}
      </span>

      {isBoardOpen && (
        <div className={styles.boardContainer}>
          <div className={styles.meetingContent}>
            <button className={styles.closeButton} onClick={toggleBoardPopup}>
              Close ✖
            </button>
            <h2>Board Meetings</h2>
            <p>Board of Trustees meet 11 times a year.</p>
            <p>Meetings take place on the fourth Tuesday of the month at 6 p.m.</p>

            <div className={styles.meetingsContainer}>
              {boardMeetings.map(({ year, months }) => (
                <div key={year} className={styles.meetingYear}>
                  <h3>{year}</h3>
                  <div className={styles.meetingGrid}>
                    {months.map((month) => (
                      <button key={month} className={styles.meetingBox}>
                        {month}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
