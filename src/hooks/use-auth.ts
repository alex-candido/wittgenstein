import { authClient } from "@/lib/better-auth/client";
import { UserRole } from "@prisma/client";
import { useMemo } from "react";

export const useAuth = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = useMemo(() => session?.user, [session]);
  const isAuthenticated = useMemo(() => !!session, [session]);

  const hasRole = (role: UserRole | UserRole[]) => {
    if (!user || !(user as any).role) {
      return false;
    }

    const userRole = (user as any).role as UserRole;

    if (Array.isArray(role)) {
      return role.includes(userRole);
    }

    return userRole === role;
  };

  return {
    session,
    user,
    isAuthenticated,
    isPending,
    hasRole,
  };
};
