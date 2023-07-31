import React from "react";
import Images from "../../Atoms/Images";
import Text from "../../Atoms/Text";

export default function UserTabDetails() {
  return (
    <div className="usertabdetails align-item justify-content flex-row flex flex-gap">
      <div className="userProfileImg">
        <Images imageName="profilePic" height="40px" />
      </div>
      <div className="userdetails flex">
        <div className="usereport">
          <Text word="userReport" />
        </div>

        <div className="nameStyle userId flex">
          <Text word="firstname" />
          <Text word="surname" />
        </div>
      </div>
    </div>
  );
}
