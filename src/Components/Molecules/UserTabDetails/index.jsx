import React from "react";
import profilePic from "../../../assets/image-jeremy.png"
import Images from "../../Atoms/Images";
import Text from "../../Atoms/Text";

export default function UserTabDetails() {
  return (
    <div className="userTabDetails">
      <div className="userProfileImg">
        <Images className="userProfileImgAvatar" src={profilePic} alt="profilePicture" height="40px" />
      </div>
      <div className="userdetails">
        <div className="usereport">
          <Text type="p" text="Report for" />
        </div>

        <div className="nameStyle">
          <Text type="p" text="Jeremy" />
          <Text type="p" text="Robson" />
        </div>
      </div>
    </div>
  );
}
