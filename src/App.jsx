import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import AdvancedTables from "./components/tables/AdvancedTables";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/advancedTables",
        element: <AdvancedTables />,
      },
    ],
  },
]);

export default App;
