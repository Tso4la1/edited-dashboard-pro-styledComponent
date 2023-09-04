import styled from "styled-components";
import { devices } from "./devices";

export const HomepageWrapper = styled.div`

height: 100vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;

@media screen and ${devices.mobile}{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    gap: 60px;
}
`