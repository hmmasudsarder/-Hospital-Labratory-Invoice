import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import AdvancedTables from "./components/tables/AdvancedTables";
import Home from "./components/pages/Home";
import BasicForm from "./components/forms/BasicForm";

import ValidationForm from "./components/forms/ValidationForm";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/advancedTables",
        element: <AdvancedTables />,
      },
      {
        path: "/validationForm",
        element: <ValidationForm />,
      },
      {
        path: "/basicform",
        element: <BasicForm />,
      },
    ],
  },
]);

export default App;
