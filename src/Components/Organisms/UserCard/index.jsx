import React from "react";
import UsertabDetails from "../../Molecules/UserTabDetails";
import UserCalendar from "../../Molecules/Usercalendar";

export default function UserCard() {
  return (
    <div className="usercard">
      <UsertabDetails />
      <UserCalendar />
    </div>
  );
}
