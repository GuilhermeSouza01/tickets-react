import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid ${(props) => props.theme["color-grey-300"]};
  border-radius: 5px;
  background-color: ${(props) => props.theme["color-grey-0"]};
  box-shadow: ${(props) => props.theme["shadow-sm"]};
  width: 100%;
  height: 8rem;
`;

export default Textarea;
