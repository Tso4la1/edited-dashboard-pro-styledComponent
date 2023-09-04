import styled from "styled-components";
import { devices } from "./devices";

export const UserTabDetailsWrapper = styled.div`

background-color: hsl(246, 80%, 60%);
width: 100%;
height: 100%;
border-radius: 10px;
padding: 25px 0 35px 15px;
margin-bottom: 60px;
z-index: 10;
position: relative;



@media screen and ${devices.mobile}{
    background-color: hsl(246, 80%, 60%);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 0;
    margin-top: 12px;
    z-index: 10;
    position: relative;
    gap: 8px;
}
`