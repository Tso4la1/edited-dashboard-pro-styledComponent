import styled from "styled-components";
import { devices } from "./devices"

export const UserCalenderWrapper = styled.div`
background-color: hsl(235, 46%, 20%);
width: 14%;
height: 25%;
z-index: 0;
border-radius: 10px;
padding: 28px 0 8px 15px;
position: absolute;
top: 58%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 13px;
font-size: 0.75rem;
font-weight: 400;
color: slateblue;

@media screen and ${devices.mobile}{
    background-color: hsl(235, 46%, 20%);
    width: 52%;
    height: 9%;
    z-index: 0;
    border-radius: 10px;
    padding: 10px 16px 0 16px;
    position: absolute;
    top: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
    font-size: 0.54rem;
    font-weight: 400;
    color: slateblue;
}
`