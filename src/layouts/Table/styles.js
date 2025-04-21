import styled from "styled-components";

export const StyledTable = styled.div`
  border: 1px solid ${(props) => props.theme["color-grey-300"]};

  font-size: 0.9rem ;
  background-color: ${(props) => props.theme["background-50"]};
  border-radius: 7px;
  overflow: hidden;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  column-gap: 2rem;
  align-items: center;
`;

export const Header = styled(Row)`
  padding: 1.6rem 2.4rem;
  background-color: ${(props) => props.theme["color-tone-blue-100"]};
  color: ${(props) => props.theme["color-grey-500"]};
  border-bottom: 1px solid ${(props) => props.theme["color-grey-300"]};
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
`;
export const Body = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme["background-50"]};
`;
export const DataRow = styled(Row)`
 padding: 1.2rem 2.4rem;

&:not(:last-child) {
  border-bottom: 1px solid ${(props) => props.theme["color-grey-300"]};
}
`;

export const EmptyTable = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin: 2rem 0;
  color: ${(props) => props.theme["color-grey-500"]};
`;
