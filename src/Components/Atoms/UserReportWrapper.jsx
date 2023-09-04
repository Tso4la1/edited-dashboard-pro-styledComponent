import styled from "styled-components";
import { devices } from "./devices";

export const UserReportWrapper = styled.div`
padding-top: 26px;
font-size: 0.6rem;
font-weight: 300;
color: lightgray;

@media screen and ${devices.mobile}{
    padding-top: 26px;
    font-size: 0.5rem;
    font-weight: 300;
    color: lightgray;
}

`