import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";
import Donation from "../Pages/Donation";
import Statastics from "../Pages/Statastics";
import DonationDetails from "../components/DonationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        loader: ()=>fetch('../../public/data.json'),
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
                path: "/donation/:id",
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