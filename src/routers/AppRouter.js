import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {   

  return (

    <Router>
      <Routes>

        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }
        />

        <Route path="/*" element={  //  el * en el /* significa el siguiente elemento que esta en dashboardRoutes
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        }
        />

      </Routes>
    </Router>

  )
}
