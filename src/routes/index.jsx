import { createBrowserRouter } from "react-router-dom";
import Auth from "../Layout/Auth/Auth";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Dashboard/Home";
import Admin from "../Pages/Dashboard/Admin";
import ChangePassword from "../Pages/Auth/ChangePassword";
import Login from "../Pages/Auth/Login";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import VerifyOtp from "../Pages/Auth/VerifyOtp";
import ResetPassword from "../Pages/Auth/ResetPassword";
import NotFound from "../NotFound";
import Notifications from "../Pages/Dashboard/Notifications";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import Analytics from "../Pages/Dashboard/Analytics";
import Customers from "../Pages/Dashboard/Customers";
import Sales from "../Pages/Dashboard/Sales";
import Orders from "../Pages/Dashboard/Orders";
import Terms from "../Pages/Dashboard/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <ProtectedRoute><Main /></ProtectedRoute> , 
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/analytics",
                element: <Analytics />
            },
            {
                path: "/customers",
                element: <Customers />
            },
            {
                path: "/sales",
                element: <Sales />
            },
            {
                path: "/orders",
                element: <Orders />
            },
            {
                path: "/admin",
                element: <Admin />
            },
           
            {
                path: "/terms",
                element: <Terms />
            },
           
            {
                path: "/change-password",
                element: <ChangePassword />
            },

            {
                path: "/profile",
                element: <AdminProfile />
            }
            ,
            {
                path: "/notification",
                element: <Notifications/> 
            }
               
        ]
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "/auth",
                element: <Login />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "verify-otp",
                element: <VerifyOtp />,
            },
            {
                path: "reset-password",
                element: <ResetPassword />,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;
