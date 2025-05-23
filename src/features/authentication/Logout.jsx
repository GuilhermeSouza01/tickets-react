/* eslint-disable react/react-in-jsx-scope */
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { LogoutButton } from "../../layouts/LogoutButton";
import { SpinnerMini } from "../../layouts/SpinnerMini";
import { useLogout } from "./useLogout";

export function Logout() {
  const {logout, isLoading} = useLogout();

  return (
    <LogoutButton onClick={logout} disabled={isLoading}>
      {!isLoading ? <>Sign out <HiArrowRightOnRectangle strokeWidth={1} /></> : <SpinnerMini />}
    </LogoutButton>
  )
}
