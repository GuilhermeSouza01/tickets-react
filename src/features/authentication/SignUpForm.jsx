/* eslint-disable react/react-in-jsx-scope */

import { useForm } from "react-hook-form";
import { Form } from "../../layouts/Form";
import { FormRow } from "../../layouts/FormRow";
import { Input } from "../../layouts/Input";
import { Button } from "../../layouts/Button";
import { Select } from "../../layouts/Select";
import { useSignup } from "./useSignup";

export function SignUpForm() {

  const { signup, isLoading } = useSignup();
  const {register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({fullName, email, password, manager}) {

    signup({
      fullName, email, password, manager
    },

    {
        onSettled: () => reset(),
    });

  }

  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={false}
          {...register("fullName", {
            required: "Full Name is required",
            minLength: {
              value: 3,
              message: "Full Name must be at least 3 characters long"
            }
          })}
        />
      </FormRow>
      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={false}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="Is Manager" error={errors?.manager?.message}>
         <Select
            id="manager"
            {...register("manager", {
              required: "Please select a value",
            })}
            defaultValue=""
            className="input"
            options={[
              { value: "", label: "Select an option" },
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ]}
          >

          </Select>
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={false}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={false}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variant="secondary"
          type="reset"
          disabled={false}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={false}>Create new user</Button>
      </FormRow>
    </Form>
  );
}
