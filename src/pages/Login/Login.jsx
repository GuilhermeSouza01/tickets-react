/* eslint-disable react/react-in-jsx-scope */
import { LoginForm } from "../../features/authentication/LoginForm";
import { Logo } from "../../layouts/Logo";
import { LoginLayout } from "./styles";

export function Login() {
  return (
    <LoginLayout>

        <Logo />
        <LoginForm />
    </LoginLayout>
  );
}
