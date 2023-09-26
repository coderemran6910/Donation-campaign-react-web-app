import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import Statistics from "../Pages/StatasticsPage/Statastics";
import DonationDetails from "../components/DonationDetails/DonationDetails";
import DonationPage from "../Pages/DonationPAge/DonationPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
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
                path: "/statasrics",
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default router