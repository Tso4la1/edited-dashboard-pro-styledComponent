import React from "react";
import Icons from "../../Atoms/Icons";

export default function UserTimerList({ active }) {
  return (
    <div className="userTimerList flex flex-column">
      {active.map((item) => (
        <div className="firstActiveTimer" key={item.id}>
          <div className="userTimerListBack">{item.backgroundImg}</div>
          <div key={item.id} className="userTimerListDetails flex flex-column">
            <div className="flex flex userTimerTitle">
              {item.duty}
              <Icons label={item.icon} style={{width:"13px", height: "3px"}}/>
            </div>
            <div className="flex flex-row userTimer">
              {item.time}
              {item.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
