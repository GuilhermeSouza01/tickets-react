import { useMoveBack } from "../../../hooks/useMoveBack";
import { ButtonText } from "../../../layouts/ButtonText";
import { useTicket } from "../useTicket";
import { HeaderContainer, StyledTicketDetail, StyledTicketDetailCreationInfo, StyledTicketDetailDescription, StyledTicketDetailHeader, StyledTicketInfo, TitleSelectContainer } from "./styles";
import { HiChevronLeft } from "react-icons/hi2"
import { Spinner } from "../../../layouts/Spinner";
import { Empty } from "../../../layouts/Empty";
import { Tag } from "../../../layouts/Tag";
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { useEditTicket } from "../useEditTicket";
import { Select } from "../../../layouts/Select";
import { useEffect, useState } from "react";

/* eslint-disable react/react-in-jsx-scope */
export function TicketDetail() {

  const {ticket, isLoading, error} = useTicket();
  const { isUpdating, updateTicket } = useEditTicket();

  const moveBack = useMoveBack();
  const [currentStatus, setCurrentStatus] = useState("");

  useEffect(() => {
    if (ticket) {
      setCurrentStatus(ticket.status);
    }
  }, [ticket]);

  if (isLoading) return <Spinner />

  if (!ticket) return <Empty resource="ticket" />

  const { id: ticketId, title, status: initialStatus, priority, description, createdAt, authorName, authorEmail } = ticket;



  const statusOptions = [
    { value: "open", label: "Open" },
    { value: "in_progress", label: "In Progress" },
    { value: "resolved", label: "Resolved" },
    { value: "closed", label: "Closed" }
  ];

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


  const { textColor, bgColor } = statusStyles[currentStatus] || {
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

  function handleStatusChange(e) {
    const newStatus = e.target.value;

    setCurrentStatus(newStatus);

    const formattedData = {
    data: {
      attributes: {
        status: newStatus
      }
    }
  };

      updateTicket({
        id: ticketId,
        data: formattedData
      });

  }

  return (
    <StyledTicketDetail>
      <HeaderContainer>
        <ButtonText onClick={moveBack}>
            <HiChevronLeft strokeWidth={1.5} /> Back to tickets
        </ButtonText>
      </HeaderContainer>
      <StyledTicketInfo>
        <StyledTicketDetailHeader>
          <Tag textcolor={textColor} bgColor={bgColor}>
            {currentStatus}
          </Tag>
          <Tag textcolor={priorityTextColor} bgColor={priorityBgColor}>
            {priority}
          </Tag>
        </StyledTicketDetailHeader>
        <TitleSelectContainer>
            <h2>{title}</h2>
            <Select
              options={statusOptions}
              value={currentStatus}
              onChange={handleStatusChange}
              disabled={isUpdating}
            />
        </TitleSelectContainer>
        <StyledTicketDetailCreationInfo>
          <p>
            <span> <HiOutlineClock strokeWidth={2.5} /> </span>
            Created {new Date(createdAt).toLocaleDateString()}, {new Date(createdAt).toLocaleTimeString()}
          </p>

           <p>
            <span> <HiOutlineUser strokeWidth={2.5} /> </span>
            Assigned to: {authorName} ({authorEmail})
          </p>
        </StyledTicketDetailCreationInfo>
        <StyledTicketDetailDescription>
          <p>{description}</p>
        </StyledTicketDetailDescription>
      </StyledTicketInfo>
    </StyledTicketDetail>
  );
}
