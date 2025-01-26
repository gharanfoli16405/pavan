import { type RouteConfig, layout, prefix } from "@react-router/dev/routes";
import publicRoutes from "./routes/publicRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

export default [
  layout("layout/DashboardLayout/DashboardLayout.jsx", dashboardRoutes),
  ...prefix("auth", [
    layout("layout/PublicLayout/PublicLayout.jsx", publicRoutes),
  ]),
] satisfies RouteConfig;
