import React from "react";
import UserCard from "../../Organisms/UserCard";
import ActivitiesGrid from "../../Organisms/ActivitiesGrid";
import { HomepageWrapper } from "../../Atoms/HomepageWrapper";


export default function Homepage() {
  return (
    <HomepageWrapper>
      <UserCard />
      <ActivitiesGrid />
    </HomepageWrapper>
  );
}
