import { useMoveBack } from "../../hooks/useMoveBack";
import { Button } from "../Button";
import Heading from "../Heading";
import { Box, StyledPageNotFound } from "./styles";

/* eslint-disable react/react-in-jsx-scope */
export function PageNotFound() {

  const moveBack = useMoveBack();
  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for does not exist. 🥲
        </Heading>
        <Button onClick={moveBack} size="large">
           &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}
