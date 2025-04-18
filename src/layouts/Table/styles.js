import styled from "styled-components";

export const StyledTable = styled.div`
  border: 1px solid ${(props) => props.theme["primary-500"]};

  font-size: 1.5rem;
  background-color: ${(props) => props.theme["background-100"]};
  border-radius: 7px;
  overflow: hidden;
`;

export const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme["primary-500"]};
  color: ${(props) => props.theme["background-100"]};
`;
export const StyledTableBody = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme["background-100"]};
`;
export const StyledTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme["primary-500"]};
`;

export const EmptyTable = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin: 2rem 0;
`;
