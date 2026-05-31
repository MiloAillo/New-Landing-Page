import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import LandingPage from "../Landing-Page/LandingPage";

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                index: true,
                element: <LandingPage />
            }
        ]
    }
])

export default mainRouter