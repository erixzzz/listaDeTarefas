import styled from "styled-components";

export const CustomHeader = styled.header`
    width: 100%;
    height: 12.5rem;
    background-color: ${(props) => props.theme['gray-700']};
    display: flex;
    align-items: center;
    justify-content: center;
`;
