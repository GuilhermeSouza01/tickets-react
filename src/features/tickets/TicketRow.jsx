/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { DataRow } from "../../layouts/Table/styles";
import { Tag } from "../../layouts/Tag";

export function TicketRow({ ticket: {
  id: ticketId,
  attributes: { title, status, priority, createdAt },
}
}) {

  const statusStyles = {
    open: {
      textColor: "color-green-700",
      bgColor: "color-green-100",
    },
    closed: {
      textColor: "color-red-800",
      bgColor: "color-red-100",
    },
    in_progress: {
      textColor: "color-yellow-700",
      bgColor: "color-yellow-100",
    },
    resolved: {
      textColor: "color-blue-700",
      bgColor: "color-blue-100",
    },
  };


  const { textColor, bgColor } = statusStyles[status] || {
    textColor: "color-gray-700",
    bgColor: "color-gray-100",
  };

  const priorityStyles = {
    low: {
      textColor: "color-green-700",
      bgColor: "color-green-100",
    },
    medium: {
      textColor: "color-yellow-700",
      bgColor: "color-yellow-100",
    },
    high: {
      textColor: "color-red-800",
      bgColor: "color-red-100",
    },
  };

  const { textColor: priorityTextColor, bgColor: priorityBgColor } = priorityStyles[priority] || {
    textColor: "color-gray-700",
    bgColor: "color-gray-100",
  };

  return (
    <DataRow key={ticketId}>
      <div>{ticketId}</div>
      <div>{title}</div>
      <Tag
        textcolor={textColor} bgColor={bgColor}
      >
        {status}
      </Tag>
      <Tag textcolor={priorityTextColor} bgColor={priorityBgColor}>{priority}</Tag>
      <div>{new Date(createdAt).toLocaleDateString()}</div>
    </DataRow>
  );
}

