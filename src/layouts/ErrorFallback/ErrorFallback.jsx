/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Box, StyledErrorFallback } from "./styles";

export function ErrorFallback({error}) {
  return (
    <StyledErrorFallback>
      <Box>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <p>Please try again later.</p>
      </Box>
    </StyledErrorFallback>
  );
}
