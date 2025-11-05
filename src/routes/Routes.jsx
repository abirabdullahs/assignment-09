import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import SkillDetails from '../pages/SkillDetails/SkillDetails';
import Login from './../pages/Login/Login';
import Signup from './../pages/Signup/Signup';
import Profile from '../pages/Profile/Profile';
import UpdateProfile from '../pages/Profile/UpdateProfile';
import PrivateRoute from './privateRoute';
import ForgetPassword from '../forgot/ForgetPassword';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: '/',
        index: true,
        Component: Home,
        loader: () => fetch('skills.json'),
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'signup',
        Component: Signup
      },
      {
        path: 'profile',
        Component: Profile
      },
      {
        path: 'update-profile',
        Component: UpdateProfile
      },
      {
        path: "/skill/:id",
        loader: () => fetch("/skills.json").then(res => res.json()),
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        )
      },
      {
        path: "/password-reset",
        Component: ForgetPassword
      }

    ]
  },
]);
