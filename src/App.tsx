import { BrowserRouter } from "react-router-dom";

import { AlertCompSnackbar } from "./Pages/components";
import { RoutesMain } from "./Routes/Routes";


export const App = () => {
  return (
    <BrowserRouter>
      <AlertCompSnackbar />

      <RoutesMain />
    </BrowserRouter>
  );
};
