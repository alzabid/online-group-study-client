import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateAssignment from "../pages/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import UpdateAssignment from "../pages/UpdateAssignment";
import Assignments from "../pages/Assignments";
import Details from "../pages/Details";
import SubmittedAssignment from "../pages/SubmittedAssignment";
import MySubmit from "../pages/MySubmit";

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
        path: "/assignments",
        element: <Assignments></Assignments>,
      },
      {
        path: "/create",
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://online-group-study-server-beta.vercel.app/assignments/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://online-group-study-server-beta.vercel.app/assignments/${params.id}`
          ),
      },
      // {
      //   path: "/submits",
      //   element: (
      //     <PrivateRoute>
      //       <SubmittedAssignment></SubmittedAssignment>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/mysubmits",
      //   element: (
      //     <PrivateRoute>
      //       <MySubmit></MySubmit>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  
  {
        path: "/submits",
        element: (
          <PrivateRoute>
            <SubmittedAssignment></SubmittedAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/mysubmits",
        element: (
          <PrivateRoute>
            <MySubmit></MySubmit>
          </PrivateRoute>
        ),
      },
]);

export default router;
