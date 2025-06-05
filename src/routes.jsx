import React from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";
import HomeLayout from "./container/HomeLayout";
import DetailsLayout from "./container/DetailsLayout";
import Home from "./views/home/Home";
import AboutUs from "./views/aboutus/AboutUsPage";
import Contact from "./views/contact/Contact";
import Services from "./views/services/Services";
import Portfolio from "./views/portfolio/Portfolio";
import Faq from "./views/faq/Faq";
import Lights from "./views/services/Lights";
import Shop from "./views/shop/Shop";
import Terms from "./views/terms/Terms";
import Privacy from "./views/privacy/Privacy";
import Login from "./views/auth/Login";
import Account from "./views/account/Account";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "", element: <Home />, index: true },
        { path: "about", element: <AboutUs /> },
        { path: "contact", element: <Contact /> },
        { path: "services", element: <Services /> },
        { path: "shop", element: <Shop /> },
        { path: "terms", element: <Terms /> },
        { path: "privacy", element: <Privacy /> },
        { path: "login", element: <Login /> },
        {
          path: "account",
          element: (
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          ),
        },
        { path: "*", element: <Home /> },
      ],
    },
  ]);

  return routes;
}
