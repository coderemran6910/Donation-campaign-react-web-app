import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import Statistics from "../Pages/StatasticsPage/Statastics";
import DonationDetails from "../components/DonationDetails/DonationDetails";
import DonationPage from "../Pages/DonationPAge/DonationPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: async()=> await fetch('data.json'),
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/donation",
                element: <DonationPage></DonationPage>
            },
            {
                path: "/donationDetails/:id",
                element: <DonationDetails> </DonationDetails>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default router