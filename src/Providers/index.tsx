import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { WorkSpaceProvider } from "./Workspace";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <WorkSpaceProvider>
      <UserProvider>
        <AuthProvider>{children}</AuthProvider>
      </UserProvider>
    </WorkSpaceProvider>
  );
};
