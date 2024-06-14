import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashProducts from "../pages/dashboard/DashProducts";
import AddProduct from "../pages/dashboard/AddProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:3000/products")
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />,
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "dashboard/all-products",
                element: <DashProducts />,
                loader: () => fetch("http://localhost:3000/products")
            },
            {
                path: "dashboard/add-product",
                element: <AddProduct />,
            },
        ]
    }
]);

// 01333 411273
// 01893 894443

export default router; 