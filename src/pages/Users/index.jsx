/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { SignUpForm } from "../../features/authentication/SignUpForm";
import Heading from "../../layouts/Heading";
import { ButtonText } from "../../layouts/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import { HiChevronLeft } from "react-icons/hi2";

export function Users() {
  const moveBack = useMoveBack();
  return (
    <StyledCreate>
      <ButtonText onClick={moveBack}>
         <HiChevronLeft strokeWidth={1.5} /> Move Back
         </ButtonText>

      <Heading as="h1">Create a new User</Heading>
      <SignUpForm />
    </StyledCreate>
  )
}

export const StyledCreate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
`;

