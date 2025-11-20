import { createBrowserRouter } from "react-router-dom";
import { Error } from "../Error";
import { paths } from "../Constant";
import { AuthLayout } from "../Pages/Layout/AuthLayout";
import { MainLayout } from "../Pages/Layout/MainLayout";
import { SigninPage } from "../Pages/Auth/Signin";
import { ForgotPasswordPage } from "../Pages/Auth/ForgotPassword";
import { DashboardPage } from "../Pages/Main/Dashboard";
import { Analysis } from "../Pages/Main/Analysis";
import { InvoicePage } from "../Pages/Main/Invoice";
import { ProfilePage } from "../Pages/Main/Profile";
import { SettingsPage } from "../Pages/Main/Settings";
import { TeachersPage } from "../Pages/Main/Teachers";

export const router = createBrowserRouter([
  {
    path: paths.LOGIN,
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <SigninPage /> },
      { path: paths.FORGOT, element: <ForgotPasswordPage /> },
    ],
  },
  {
    path: paths.APPS,
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: paths.ANALYSIS, element: <Analysis /> },
      { path: paths.INVOICE, element: <InvoicePage /> },
      { path: paths.SETTING, element: <SettingsPage /> },
      { path: paths.PROFILE, element: <ProfilePage /> },
      { path: paths.TEACHER, element: <TeachersPage /> },
    ],
  },
]);
