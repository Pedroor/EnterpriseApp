import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Creators as AuthActions } from "../../redux/ducks/auth";
import { IState } from "../../redux/store";
import { LoginView } from "./view";

export default function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector<IState, boolean>(
    (state) => state.authReducer.isLoading
  );
  const isError = useSelector<IState, boolean>(
    (state) => state.authReducer.isError
  );
  const isLogged = useSelector<IState, boolean>(
    (state) => state.authReducer.isLogged
  );

  const handleSignIn = useCallback(
    (email: string, password: string) => {
      dispatch(AuthActions.authRequest(email, password));
    },
    [dispatch]
  );

  return (
    <LoginView
      isLoading={isLoading}
      isError={isError}
      handleSignIn={handleSignIn}
      isLogged={isLogged}
    />
  );
}
