import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router";
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
          <Route exact path="/" component={MainPage} />
          <Route path="/registration" component={RegistrationPage} restricted />
          <Route exact path="/login" component={LoginPage} restricted />
          <Route path="/calculator" component={CalculatorPage} />

          <Route path="/diary" component={DiaryPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
