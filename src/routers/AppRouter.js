import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {   //login tiene un estilo (con el navbar) y los que estan dentro de DashBoardRoutes tienen otros



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
