import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ThemeContext from "./contexts/ThemeContext";
import "./index.css";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import AuthContextProvider from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ErrorBoundary>
      <AuthContextProvider>
        <ThemeContext>
          <AppLayout />
        </ThemeContext>
      </AuthContextProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
