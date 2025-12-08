import { Navigate, Route, Routes } from "react-router-dom";
import { PageLogin } from "src/Pages/TelasLogin/Login/Index";
import { PageSendLinkRecoverPassword } from "src/Pages/TelasLogin/SendLinkRecoverPassword/Index";

import { UrlConfigPublic } from "./Config/UrlConfigPublic";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PageLogin />} path={UrlConfigPublic.login} />

      {/* <Route element={<PageLoginRegister />} path={UrlConfigPublic.register} /> */}

      <Route
        element={<PageSendLinkRecoverPassword />}
        path={UrlConfigPublic.RecoverPassword}
      />

      <Route element={<Navigate to="/login" />} path="*" />
    </Routes>
  );
};
