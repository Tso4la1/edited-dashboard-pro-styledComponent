import styled from "styled-components";
import { devices } from "./devices";

export const UserCardWrapper = styled.div`

width: 14%;
display: flex;
flex-direction: column;

@media screen and ${devices.mobile}{
    width: 52%;
    height: 11%;
    display: flex;
    flex-direction: column;
}
`