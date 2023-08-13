import React from "react";
import UserCard from "../../Organisms/UserCard";
import ActivitiesGrid from "../../Organisms/ActivitiesGrid";

export default function Homepage() {
  return (
    <div className="homepage">
      <UserCard />
      <ActivitiesGrid />
    </div>
  );
}
