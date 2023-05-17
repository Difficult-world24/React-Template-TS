import { Route, Routes } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationURLS";

export default function Navigation() {
  return (
    <>
      <Routes>
        {ApplicationRoutes.map(({ path, component }) => (
          <Route path={path} element={component} />
        ))}
      </Routes>
    </>
  );
}
