import { useForm } from "react-hook-form";
import { useCreateTicket } from "./useCreateTicket";

import { Form } from "../../layouts/Form";
import { FormRow } from "../../layouts/FormRow";
import { FormRowVertical } from "../../layouts/FormRowVertical";
import { Input } from "../../layouts/Input";
import Textarea from "../../layouts/Textarea";
import { Select } from "../../layouts/Select";
import { Button } from "../../layouts/Button";
import { data, useNavigate } from "react-router-dom";
import { FormRowHorizontal } from "../../layouts/FormRowHorizontal";
import Heading from "../../layouts/Heading";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";

/* eslint-disable react/react-in-jsx-scope */
export function TicketForm() {

  const { isCreating, createTicket } = useCreateTicket();

  const { user, isLoading } = useUser();

  const navigate = useNavigate();

  const { register, handleSubmit, formState }  = useForm();
  const { errors } = formState;

  const onSubmit = async (formData) => {
    if(!user) return;
    const payload = {
     data:{

        attributes: {
          title: formData.title,
          description: formData.description,
          status: formData.status,
          priority: formData.priority,
        },
        relationships: {
          author: {
              data: {
                id: user.id,
            },
          },
        },
      },
    };

    try {
      createTicket(payload);
      toast.success("Ticket created successfully");
      navigate("/tickets");
    } catch (error) {
      console.error("Error creating ticket:", error);
       toast.error("Erro ao criar o ticket. Tente novamente.");
    }
  }
  if (isLoading) return null;
  if (!user) {
    return (
      <div>
        <p>You need to be logged in to create a ticket.</p>
      </div>
    );
  }

  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <Heading>Create new Ticket</Heading>
      <Heading as="p" >Submit a new for support, feature request, or bug reports.</Heading>
      <FormRow label="Ticket Title" error={errors.title?.message}>
        <Input
          type="text"
          id="title"
          disabled={isCreating}
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters long",
            },
          })}
        />
      </FormRow>

      <FormRowHorizontal>
        <FormRowVertical label="Ticket Status" error={errors.status?.message}>
              <Select
                id="status"
                disabled={isCreating}
                {...register("status", {
                  required: "Status is required",
                })}
                options={[
                  { value: "open", label: "Open" },
                  { value: "in-progress", label: "In Progress" },
                  { value: "closed", label: "Closed" },
                  { value: "resolved", label: "Resolved" },
                ]}
              />
      </FormRowVertical>

      <FormRowVertical label="Ticket Priority" error={errors.priority?.message}>
        <Select
          id="priority"
          disabled={isCreating}
          {...register("priority", {
            required: "Priority is required",
          })}
          options={[
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
          ]}
        />
      </FormRowVertical>

      </FormRowHorizontal>

      <FormRow label="Ticket Description" error={errors.description?.message}>
        <Textarea
          id="description"
          disabled={isCreating}
          {...register("description", {
            required: "Description is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variant="secondary" disabled={isCreating} onClick={() => navigate(-1)}>Cancel</Button>
        <Button disabled={isCreating} type="submit">Add Ticket</Button>
      </FormRow>
    </Form>
  );
}
