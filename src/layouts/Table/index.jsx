/* eslint-disable react/prop-types */

import React from 'react';

import { DataRow, Header, StyledBody, StyledTable } from './styles';
import { Empty } from '../Empty/Empty';

export function Table({children}) {

  return (
    <StyledTable>

       {children}
    </StyledTable>
  );
};

export function TableBody({data, render}) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>

  return <StyledBody>{data.map(render)}</StyledBody>
}

export function TableRow({children}) {
  return <DataRow>{children}</DataRow>
}


