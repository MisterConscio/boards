import ThreadsCatalog from "./components/ThreadsCatalog";
import ThreadPage from "./components/ThreadPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ThreadsCatalog />,
  },
  {
    path: "/thread",
    element: <ThreadPage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
