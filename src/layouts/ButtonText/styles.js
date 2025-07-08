import styled from "styled-components";


export const StyledButtonText = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${(props) => props.theme["color-grey-400"]};
  font-weight: 500;
  transition: all 0.3s;
  margin-bottom: 2rem;

  outline: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover,
  &:active {
    color: ${(props) => props.theme["color-grey-500"]};
  }
`;
