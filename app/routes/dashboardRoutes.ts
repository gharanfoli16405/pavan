import { index, route } from "@react-router/dev/routes";

const dashboardRoutes = [
  index("pages/Home/Home.jsx"),
  route("services", "pages/Services/Services.jsx"),
  route("R&D", "pages/Test/Test.tsx"),
];

export default dashboardRoutes;
