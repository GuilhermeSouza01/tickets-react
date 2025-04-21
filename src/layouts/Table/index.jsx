/* eslint-disable react/prop-types */

import React from 'react';

import { Body, DataRow, Header, StyledTable } from './styles';

export function Table({children}) {

  return (
    <StyledTable>

       {children}
    </StyledTable>
  );
}
