/* eslint-disable react/react-in-jsx-scope */
import {Form} from "../../layouts/Form"
import { FormRowVertical } from "../../layouts/FormRowVertical";
import { Input } from "../../layouts/Input";
import { Button } from "../../layouts/Button";
import { useState } from "react";
import { useLogin } from "./useLogin";
import { SpinnerMini } from "../../layouts/SpinnerMini";

export function LoginForm() {

  const [email, setEmail] = useState("sgerlach@example.com")
  const [password, setPassword] = useState("password");

  const {login, isLoading} = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    login({email, password});
    console.log(login);
  }
  return (
    <Form onSubmit={handleSubmit} >
      <FormRowVertical label="Email">
        <Input
        type="email"
        id="email"
        autoComplete="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
         />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
        type="password"
        id="password"
        autoComplete="username"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
         />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>{!isLoading ? "Log in" : <SpinnerMini />}</Button>
      </FormRowVertical>
    </Form>
  );
}
