import styled from 'styled-components';

export const Flex = styled.div`
display:flex;
align-item: ${(props) => props.alignItems};
justify-content: ${(props) => props.justifyContent};
flex-direction: ${(props) => props.flexDirection};
gap: ${(props) => props.gap};
height: ${(props) => props.height};
width: ${(props) => props.width};
`