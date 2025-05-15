import styled from "styled-components";

export const StyledConfirmDelete = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & p {
    color: ${(props) => props.theme["color-grey-500"]};
    margin-bottom: 0.75rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
  }
`;
