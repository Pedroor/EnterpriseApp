export interface ViewProps {
  isLoading: boolean;
  isError: boolean;
  isLogged: boolean;
  handleSignIn: (email: string, password: string) => void;
}
