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
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  column-gap: 2rem;
  align-items: center;
`;

export const Header = styled(Row)`
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme["color-brand-300"]};
  color: ${(props) => props.theme["color-grey-100"]};
  border-bottom: 1px solid ${(props) => props.theme["color-grey-100"]};
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
`;
export const Body = styled.div`
  /* padding: 1rem; */
  background-color: ${(props) => props.theme["color-grey-50"]};
`;
export const DataRow = styled(Row)`
  padding: 1rem 2rem;
 font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => props.theme["color-grey-600"]};
  font-family: "Roboto", sans-serif;

&:not(:last-child) {
  border-bottom: 1px solid ${(props) => props.theme["color-grey-100"]};
}
`;

export const Footer = styled.footer`
  background-color: ${(props) => props.theme["color-brand-300"]};
  display: flex;
  justify-content: center;
  padding: 1rem;

  /* &:not(:has(*)) {
    display: none;
  } */
`;

export const EmptyTable = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin: 2rem 0;
  color: ${(props) => props.theme["color-grey-500"]};
  background-color: ${(props) => props.theme["background-50"]};
`;
