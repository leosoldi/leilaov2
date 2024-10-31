import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { RegisterItem } from "./pages/dashboard/new/product";
import { RegisterCategory } from "./pages/dashboard/new/category";
import { Layout } from './components/layout';
import { NotFound } from './components/error/NotFound';
import { UnderConstruction } from './components/error/Manutencao'; 
import { Usuarios } from "./pages/dashboard/usuarios";
import { UserAdmin } from "./pages/dashboard/admin";
import { RegisterLeilao } from "./pages/dashboard/leilao/register"


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
        path: "/dashboard/new/product",
        element: <RegisterItem />
      },
      {
        path: "/dashboard/new/category",
        element: <RegisterCategory />
      },
      {
        path: "/dashboard/usuarios",
        element: <Usuarios />
      },
      {
        path: "/dashboard/admin",
        element: <UserAdmin />
      },
      {
        path: "/dashboard/leilao/register",
        element: <RegisterLeilao />
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
