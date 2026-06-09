import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import LandingPage from "../Landing-Page/LandingPage";
import TheBlog from "../The-Blog/TheBlog";
import TheLounge from "../The-Lounge/TheLounge";

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                index: true,
                element: <LandingPage />
            },
            {
                path: "/blog",
                element: <TheBlog />
            },
            {
                path: "/lounge",
                element: <TheLounge />
            }
        ]
    }
])

export default mainRouter