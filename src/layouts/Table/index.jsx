
import React from 'react';

import { StyledTable, StyledTableBody, StyledTableHeader, StyledTableRow } from './styles';

export function Table() {

  return (
    <StyledTable>
      <StyledTableHeader>
        <h2>Table Header</h2>
        <button>Add</button>
      </StyledTableHeader>
      <StyledTableBody>
        <StyledTableRow>
          <p>Row 1</p>
          <p>Row 2</p>
          <p>Row 3</p>
        </StyledTableRow>
        <StyledTableRow>
          <p>Row 4</p>
          <p>Row 5</p>
          <p>Row 6</p>
        </StyledTableRow>
        <StyledTableRow>
          <p>Row 7</p>
          <p>Row 8</p>
          <p>Row 9</p>
        </StyledTableRow>
        <StyledTableRow>
          <p>Row 10</p>
          <p>Row 11</p>
          <p>Row 12</p>
        </StyledTableRow>
        </StyledTableBody>
    </StyledTable>
  );
}
