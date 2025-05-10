import { useMoveBack } from "../../../hooks/useMoveBack";
import { ButtonText } from "../../../layouts/ButtonText";
import { useTicket } from "../useTicket";
import { HeaderContainer, StyledTicketDetail, StyledTicketDetailCreationInfo, StyledTicketDetailDescription, StyledTicketDetailHeader, StyledTicketInfo, TitleSelectContainer } from "./styles";
import { HiChevronLeft } from "react-icons/hi2"
import { Spinner } from "../../../layouts/Spinner";
import { Empty } from "../../../layouts/Empty";
import { Tag } from "../../../layouts/Tag";
import { Button } from "../../../layouts/Button";
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";

/* eslint-disable react/react-in-jsx-scope */
export function TicketDetail() {

  const {ticket, isLoading, error} = useTicket();
  console.log(ticket);

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />

  if (!ticket) return <Empty resource="ticket" />

  const { id: ticketId, title, status, priority, description, createdAt, authorName, authorEmail } = ticket;

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
    <StyledTicketDetail>
      <HeaderContainer>
        <ButtonText onClick={moveBack}>
            <HiChevronLeft strokeWidth={1.5} /> Back to tickets
        </ButtonText>
      </HeaderContainer>
      <StyledTicketInfo>
        <StyledTicketDetailHeader>
          <Tag textcolor={textColor} bgColor={bgColor}>
            {status}
          </Tag>
          <Tag textcolor={priorityTextColor} bgColor={priorityBgColor}>
            {priority}
          </Tag>
        </StyledTicketDetailHeader>
        <TitleSelectContainer>
            <h2>{title}</h2>
            <Button size="medium" variant="secondary">Teste</Button>
        </TitleSelectContainer>
        <StyledTicketDetailCreationInfo>
          <p>
            <span> <HiOutlineClock strokeWidth={2.5} /> </span>
            Created {new Date(createdAt).toLocaleDateString()}, {new Date(createdAt).toLocaleTimeString()}
          </p>

           <p>
            <span> <HiOutlineUser strokeWidth={2.5} /> </span>
            Assigned to: {authorName}
          </p>
        </StyledTicketDetailCreationInfo>
        <StyledTicketDetailDescription>
          <p>{description}</p>
        </StyledTicketDetailDescription>
      </StyledTicketInfo>
    </StyledTicketDetail>
  );
}
