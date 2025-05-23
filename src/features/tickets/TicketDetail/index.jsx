import { useMoveBack } from "../../../hooks/useMoveBack";
import { ButtonText } from "../../../layouts/ButtonText";
import { useTicket } from "../useTicket";
import { ActionButtonsContainer, HeaderContainer, StyledTicketDetail, StyledTicketDetailCreationInfo, StyledTicketDetailDescription, StyledTicketDetailHeader, StyledTicketDetailTitle, StyledTicketInfo, TitleSelectContainer } from "./styles";
import { HiChevronLeft, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2"
import { Spinner } from "../../../layouts/Spinner";
import { Empty } from "../../../layouts/Empty";
import { Tag } from "../../../layouts/Tag";
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { useEditTicket } from "../useEditTicket";
import { Select } from "../../../layouts/Select";
import { useEffect, useState } from "react";
import { Button } from "../../../layouts/Button";
import Modal from "../../../layouts/Modal";
import { ConfirmDelete } from "../../../layouts/ConfirmDelete";
import { useDeleteTicket } from "../useDeleteTicket";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../authentication/useUser";

/* eslint-disable react/react-in-jsx-scope */
export function TicketDetail() {

  const { user, isLoading: userLoading } = useUser();
  const {ticket, isLoading, error} = useTicket();
  const { isUpdating, updateTicket } = useEditTicket();
  const { isDeleting, deleteTicket } = useDeleteTicket();


  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const [currentStatus, setCurrentStatus] = useState("");

  useEffect(() => {
    if (ticket) {
      setCurrentStatus(ticket.status);
    }
  }, [ticket]);



  if (userLoading || isLoading) return <Spinner />;

  if (!ticket) return <Empty resource="ticket" />

   const isOwner = user?.email === ticket.authorEmail;
   const isManager = user?.isManager === true;

   console.log("Current user:", user);

  const { id: ticketId, title, status: initialStatus, priority, description, createdAt, authorName, authorEmail } = ticket;



  const statusOptions = [
    { value: "open", label: "Open" },
    { value: "in_progress", label: "In Progress" },
    { value: "resolved", label: "Resolved" },
    { value: "closed", label: "Closed" }
  ];
  const statusLabels = {
    open: "Open",
    closed: "Closed",
    in_progress: "In Progress",
    resolved: "Resolved",
  };

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
        <ActionButtonsContainer>
          {(isOwner || user?.isManager )  &&  (
             <Button type="button" variant="secondary"  size="medium"><HiOutlinePencil strokeWidth={2.5} /> Edit</Button>
          )}
          {isManager && (
             <Modal>
                <Modal.Open opens="delete">
                  <Button type="button" variant="danger" size="medium"><HiOutlineTrash strokeWidth={2.5} /> Delete</Button>
                </Modal.Open>

                <Modal.Window name="delete">
                  <ConfirmDelete
                    onConfirm={() => deleteTicket(ticketId, { onSettled: () => navigate(-1)})}
                    resourceName="ticket"
                    disabled={isDeleting}
                  />
                </Modal.Window>

            </Modal>
          )}


        </ActionButtonsContainer>
      </HeaderContainer>
      <StyledTicketInfo>

        <StyledTicketDetailHeader>
            <StyledTicketDetailTitle>Ticket #{ticketId} </StyledTicketDetailTitle>
          <Tag textcolor={textColor} bgColor={bgColor}>
            {statusLabels[currentStatus]}
          </Tag>
          <Tag textcolor={priorityTextColor} bgColor={priorityBgColor}>
            {priority}
          </Tag>
        </StyledTicketDetailHeader>
        <TitleSelectContainer>
            <h2>{title}</h2>
            {isManager && (
              <Select
                options={statusOptions}
                value={currentStatus}
                onChange={handleStatusChange}
                disabled={isUpdating}
              />
            )}

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
