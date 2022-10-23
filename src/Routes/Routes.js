import { createBrowserRouter } from "react-router-dom";
import CarouselItem from "../components/HeroCarousel/CarouselItem";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Home from "../components/Home/Home";
import Hotels from "../components/Hotels/Hotels";
import LocationDetails from "../components/LocationDetails/LocationDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://tour-bd-server.vercel.app/locations"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: '/location/:id',
        loader: ({params}) => {
          return fetch(`https://tour-bd-server.vercel.app/location/${params.id}`);
        },
        element: <LocationDetails></LocationDetails>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'hotels',
        loader: () => fetch("https://tour-bd-server.vercel.app/hotels"),
        element: <Hotels></Hotels>
      }
    ],
  },
]);


export default router