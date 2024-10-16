import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { RegisterItem } from "./pages/dashboard/register_item";
import { Layout } from './components/layout';
import { NotFound } from './components/error/NotFound';
import { UnderConstruction } from './components/error/Manutencao';  // Importa a página de Em Construção

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/register_item",
        element: <RegisterItem />
      },
      {
        path: "/support",
        element: <UnderConstruction />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export { router };
