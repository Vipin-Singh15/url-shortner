import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import { authRoute } from "./auth.route";
import { homeRoute } from "./homepage";
import { dashboardRoute } from "./dashboard";

export const rootRoute = createRootRoute({
  component: App,
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  authRoute,
  dashboardRoute,
]);
