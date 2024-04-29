import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

export default App;
