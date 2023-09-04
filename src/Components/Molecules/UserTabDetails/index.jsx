import React from "react";
import profilePic from "../../../assets/image-jeremy.png"
import Images from "../../Atoms/Images";
import Text from "../../Atoms/Text";
import { UserTabDetailsWrapper, NameStyleWrapper, UserProfileImgWrapper, UserReportWrapper } from "../../Atoms";

export default function UserTabDetails() {
  return (
    <UserTabDetailsWrapper>
      <UserProfileImgWrapper>
        <Images className="userProfileImgAvatar" src={profilePic} alt="profilePicture" height="40px" />
      </UserProfileImgWrapper>
      <div>
        <UserReportWrapper>
          <Text type="p" text="Report for" />
        </UserReportWrapper>

        <NameStyleWrapper>
          <Text type="p" text="Jeremy" />
          <Text type="p" text="Robson" />
        </NameStyleWrapper>
      </div>
    </UserTabDetailsWrapper>
  );
}
