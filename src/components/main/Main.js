import React, { Suspense } from "react";
import Loader from "react-loader-spinner";

import { Switch } from "react-router";

// import { Router  } from 'react-router-dom';
import { lazy } from "react";

// import {routes} from "../../routes/routes"
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";
// import RegistrationPage from '../../pages/registrationPage/RegistrationPage';
// import LoginPage from '../../pages/loginPage/LoginPage';
// import CalculatorPage from '../../pages/calculatorPage/CalculatorPage';
// import DiaryPage from '../../pages/diaryPage/DiaryPage';

const MainPage = lazy(() => import("../../pages/mainPage/MainPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/registrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/loginPage/LoginPage"));
const CalculatorPage = lazy(() =>
  import("../../pages/calculatorPage/CalculatorPage")
);
const DiaryPage = lazy(() => import("../../pages/diaryPage/DiaryPage"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoutes exact path="/" component={MainPage} restricted />
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
          <PrivateRoutes
            path="/calculator"
            component={CalculatorPage}
            redirectTo="/"
          />

          <PrivateRoutes path="/diary" component={DiaryPage} redirectTo="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
