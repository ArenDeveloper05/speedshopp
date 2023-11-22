import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";

import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import SignPage from "../pages/SignPage";
import AccountPage from "../pages/AccountPage";
import ProductMainPage from "../pages/ProductMainPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.SIGN_PAGE_ROUTE} element={<SignPage />} />
      <Route path={ROUTER.MY_ACCOUNT_PAGE_ROUTE} element={<AccountPage />} />
      <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage />} />
        <Route path={ROUTER.PRODUCT_PAGE_ROUTE} element={<ProductMainPage />}/>
    </Routes>
  );
};

export default AppRoutes;
