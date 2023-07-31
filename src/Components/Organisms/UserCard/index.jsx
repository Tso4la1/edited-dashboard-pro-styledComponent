import React from "react";
import UsertabDetails from "../../Molecules/UserTabDetails";
import Usercalendar from "../../Molecules/Usercalendar";

export default function UserCard() {
  return (
    <div className="usercard">
      <UsertabDetails />
      <Usercalendar />
    </div>
  );
}
