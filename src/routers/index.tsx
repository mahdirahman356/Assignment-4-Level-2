import App from "@/App";
import AddBooks from "@/pages/AddBooks";
import AllBooks from "@/pages/AllBooks";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                 path: "/",
                 Component: Home
            },
            {
                 path: "all-books",
                 Component: AllBooks
            },
            {
                 path: "add-books",
                 Component: AddBooks
            },
            {
                 path: "borrow-summary",
                 Component: BorrowSummary
            },
        ]
    }
])

export default router