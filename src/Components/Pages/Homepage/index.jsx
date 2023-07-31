import React from "react";
import UserCard from "../../Organisms/UserCard";
import Activitiesgrid from "../../Organisms/Activitiesgrid";

export default function Homepage() {
  return (
    <div className="homepage flex">
      <UserCard />
      <Activitiesgrid />
    </div>
  );
}
