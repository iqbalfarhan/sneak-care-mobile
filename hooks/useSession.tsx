import { useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, type PropsWithChildren } from "react";
import useIntro from "./useIntro";
import { useStorageState } from "./useStorageState";

const AuthContext = createContext<{
  signIn: (token: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const intro = useIntro();

  const queryClient = useQueryClient();

  return (
    <AuthContext.Provider
      value={{
        signIn: (token) => {
          setSession(token);
          intro.setIntro("true");
        },
        signOut: () => {
          queryClient.clear();
          queryClient.cancelQueries();
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
