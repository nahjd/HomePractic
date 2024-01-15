import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Wishlist from "../components/Navbar/Navbar";
import Basket from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
export const routes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Navbar />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];
