/* eslint-disable react/prop-types */
import React from 'react';
import { StyledTableOperations } from './styles';

export function TableOperations({ children }) {
  return (
    <StyledTableOperations>
      {children}
    </StyledTableOperations>
  );

}
