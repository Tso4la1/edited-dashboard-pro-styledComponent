import styled from "styled-components";
import { devices } from "./devices";


export const NameStyleWrapper = styled.div
    `
padding-top: 8px;
padding-bottom: 20px;
font-size: 25px;
font-weight: 300;

@media screen and ${devices.mobile}{
    padding-top: 2px;
    padding-bottom: 25px;
    font-size: 12px;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    gap: 5px;
}
`