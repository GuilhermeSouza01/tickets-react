/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme["color-grey-50"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const { isLoading, user, isFetching, isAuthenticated } = useUser();
  const navigate = useNavigate();


  useEffect(() => {
    if (!isAuthenticated && !isLoading && !isFetching) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate, isFetching]);

  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
