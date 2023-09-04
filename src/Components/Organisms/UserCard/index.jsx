import React from "react";
import UsertabDetails from "../../Molecules/UserTabDetails";
import UserCalendar from "../../Molecules/UserCalendar"
import { UserCardWrapper } from "../../Atoms/UserCardWrapper";

export default function UserCard() {
  return (
    <UserCardWrapper >
      <UsertabDetails />
      <UserCalendar />
    </UserCardWrapper>
  );
}
