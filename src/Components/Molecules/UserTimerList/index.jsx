import React from "react";
import Icons from "../../Atoms/Icons";

export default function UserTimerList({ active }) {
  return (
    <div className="userTimerList">
      {active.map((item) => (
        <div className="firstActiveTimer" key={item.id}>
          <div className="userTimerListBack">{item.backgroundImg}</div>
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
        </div>
      ))}
    </div>
  );
}

