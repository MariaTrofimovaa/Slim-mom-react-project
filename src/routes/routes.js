import { lazy } from "react"

export const routes = [
    {
        path: "/",
        label: "Main",
        exact: true,
        component: lazy(() => import('../pages/mainPage/MainPage')),
        private: false,
        restricted: true,
    },

    {
        path: "/registration",
        label: "Registration",
        exact: true,
        component: lazy(() => import('../pages/registrationPage/RegistrationPage')),
        private: false,
        restricted: true,
    },

        {
        path: "/login",
        label: "Login",
        exact: true,
        component: lazy(() => import('../pages/loginPage/LoginPage')),
        private: false,
        restricted: true,
    },
        
                {
        path: "/calculator",
        label: "Calculator",
        exact: true,
        component: lazy(() => import('../pages/calculatorPage/CalculatorPage')),
        private: true,
        restricted: false,
    },
                
                        {
        path: "/diary",
        label: "Diary",
        exact: true,
        component: lazy(() => import('../pages/diaryPage/DiaryPage')),
        private: true,
        restricted: false,
    },
        
        
];