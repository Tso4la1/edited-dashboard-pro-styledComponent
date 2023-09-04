import styled from "styled-components";
import { devices } from "./devices";

export const FirstActiveTimerWrapper = styled.div`
border-radius: 13px;
margin: 10px;

@media screen and ${devices.mobile}{
    border-radius: 13px;
    margin: 0px;
}

`
