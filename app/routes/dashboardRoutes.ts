import { index, route } from "@react-router/dev/routes";

const dashboardRoutes = [
  index("pages/Home/Home.jsx"),
  route("services", "pages/Services/Services.jsx"),
];

export default dashboardRoutes;
