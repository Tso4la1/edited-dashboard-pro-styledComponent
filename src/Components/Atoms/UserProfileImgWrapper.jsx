import { styled } from "styled-components";
import { devices } from "./devices";

export const UserProfileImgWrapper = styled.div`
height: 55px;
width: 54px;
border-radius: 28px;
border: 2px solid white;

@media screen and ${devices.mobile}{
    height: 35px;
    width: 34px;
    border-radius: 28px;
    border: 2px solid white;
}


`