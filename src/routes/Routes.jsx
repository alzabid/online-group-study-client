import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateAssignment from "../pages/CreateAssignment";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/create",
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
      //   {
      //     path: "/products/:brand",
      //     element: <Products></Products>,
      //   },
      //   {
      //     path: "/update/:id",
      //     element: (
      //       <PrivateRoute>
      //         <UpdateItem></UpdateItem>
      //       </PrivateRoute>
      //     ),
      //     loader: ({ params }) =>
      //       fetch(
      //         `https://brand-shop-server-rose.vercel.app/products/${params.id}`
      //       ),
      //   },

      //   {
      //     path: "/details/:id",
      //     element: (
      //       <PrivateRoute>
      //         <Details></Details>
      //       </PrivateRoute>
      //     ),
      //     loader: ({ params }) =>
      //       fetch(
      //         `https://brand-shop-server-rose.vercel.app/products/${params.id}`
      //       ),
      //   },
      //   {
      //     path: "/add",
      //     element: (
      //       <PrivateRoute>
      //         <AddProduct></AddProduct>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/cart",
      //     element: (
      //       <PrivateRoute>
      //         <Cart></Cart>
      //       </PrivateRoute>
      //     ),
      //     loader: () => fetch("https://brand-shop-server-rose.vercel.app/cart"),
      //   },
      //   {
      //     path: "/contact",
      //     element: <Contact></Contact>,
      //   },
    ],
  },
]);
   



export default router;