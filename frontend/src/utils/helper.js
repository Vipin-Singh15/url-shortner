import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api";
import { login } from "../store/slices/authSlice";

export const checkAuth = async ({ context }) => {
  const { queryClient, store } = context;

  try {
    const user = await queryClient.ensureQueryData({
      queryKey: ["currentUser"],
      queryFn: getCurrentUser,
      retry: false,
    });

    if (!user) return false;
    store.dispatch(login(user));

    const { isAuthenticated } = store.getState().auth;

    if (!isAuthenticated) return false;

    return true;
  } catch (error) {
    return redirect({ to: "/auth" });
  }
};
