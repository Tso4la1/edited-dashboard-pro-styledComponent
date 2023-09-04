import styled from "styled-components";
import { devices } from "./devices";


export const UserTimerListWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 100%;
margin: 40px 180px 0 2px;

@media screen and ${devices.mobile}{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 12px 0 2px;
    gap: 12px;
}

`