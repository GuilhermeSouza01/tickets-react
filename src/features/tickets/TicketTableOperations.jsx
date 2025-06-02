/* eslint-disable react/react-in-jsx-scope */
import { Filter } from "../../layouts/Filter";
import { SortBy } from "../../layouts/SortBy";
import { TableOperations } from "../../layouts/TableOperations";

export function TicketTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "open", label: "Open" },
          { value: "closed", label: "Closed" },
          { value: "in_progress", label: "In Progress" },
          { value: "resolved", label: "Resolved" },
        ]}
        />

      <SortBy options={[
        { value: "createdAt-desc", label: "Created at (recent first)" },
        { value: "createdAt-asc", label: "Created at (oldest first)" },
      ]} />
    </TableOperations>
  )
}
