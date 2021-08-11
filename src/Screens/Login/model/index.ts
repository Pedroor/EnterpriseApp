export interface ViewProps {
  isLoading: boolean;
  isError: boolean;
  handleSignIn: (email: string, password: string) => void;
}
