import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddressBook from "./components/AdressBook";
import UserPage from "./pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  { path: "addressbook", element: <AddressBook /> },
  { path: "user/:email", element: <UserPage /> },
]);

export default router;
