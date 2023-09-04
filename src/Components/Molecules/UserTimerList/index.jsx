import React from "react";
import Icons from "../../Atoms/Icons";
import { UserTimerListWrapper, UserTimerListBackWrapper, FirstActiveTimerWrapper } from "../../Atoms";


export default function UserTimerList({ active }) {
  return (
    <UserTimerListWrapper >
      {active.map((item) => (
        <FirstActiveTimerWrapper className="firstActiveTimer" key={item.id}>
          <UserTimerListBackWrapper className="userTimerListBack">{item.backgroundImg}</UserTimerListBackWrapper>
          <div key={item.id} className="userTimerListDetails">
            <div className="userTimerTitle">
              {item.duty}
              <Icons type={item.icon} />
            </div>
            <div className="userTimer">
              {item.time}
              {item.text}
            </div>
          </div>
        </FirstActiveTimerWrapper>
      ))}
    </UserTimerListWrapper>
  );
}

