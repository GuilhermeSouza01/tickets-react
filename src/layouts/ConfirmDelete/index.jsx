/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Button } from "../Button";
import { StyledConfirmDelete } from "./styles";

export function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal}) {
  return (
    <StyledConfirmDelete>
      <h3>Delete {resourceName}?</h3>
      <p>
        Are you sure you want to delete this {resourceName}? This action cannot
        be undone.
      </p>
      <div>
        <Button variant="secondary" disabled={disabled} onClick={onCloseModal}>Cancel</Button>
        <Button variant="danger" disabled={disabled} onClick={onConfirm}>Delete</Button>
      </div>
    </StyledConfirmDelete>
  )
}
