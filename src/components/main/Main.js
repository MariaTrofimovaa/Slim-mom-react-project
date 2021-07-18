import React, { Suspense } from "react";

import { Switch } from "react-router";
import { lazy } from "react";
// import {routes} from "../../routes/routes"
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";
import AppLoader from "../loader/Loader";


const MainPage = lazy(() => import("../../pages/mainPage/MainPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/registrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/loginPage/LoginPage"));
const CalculatorPage = lazy(() =>
  import("../../pages/calculatorPage/CalculatorPage")
);
const DiaryPage = lazy(() => import("../../pages/diaryPage/DiaryPage"));
// const NotFound = lazy(() => import("../../pages/notFound/NotFound"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={<AppLoader />}>
        <Switch>
          <PublicRoutes
            exact
            path="/"
            component={MainPage}
            restricted
            redirectTo="/calculator"
          />
          <PublicRoutes
            path="/registration"
            component={RegistrationPage}
            redirectTo="/login"
            restricted
          />
          <PublicRoutes
            exact
            path="/login"
            component={LoginPage}
            redirectTo="/calculator"
            restricted
          />

          {/* <PublicRoutes exact path="" component={NotFound} /> */}

          <PrivateRoutes
            path="/calculator"
            component={CalculatorPage}
            redirectTo="/"
          />

          <PrivateRoutes path="/diary" component={DiaryPage} redirectTo="/" />
          {/* 
          <PrivateRoutes
            path="/"
            component={CalculatorPage}
            redirectTo="/calculator"
          /> */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
