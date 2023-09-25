import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";
import Donation from "../Pages/DonationPage";
import Statastics from "../Pages/Statastics";
import DonationDetails from "../components/DonationDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: async()=> await fetch('../../public/data.json'),
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/donationDetails/:id",
                element: <DonationDetails></DonationDetails>
            },
            {
                path: "/statasrics",
                element: <Statastics></Statastics>
            }
        ]
    }
])

export default router