
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorElement from '../pages/ErrorElement';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivetRoute from './PrivetRoute';
import MyProfile from '../pages/MyProfile';

import ProfileUpdate from '../pages/ProfileUpdate';
import Community from '../pages/Community';
import AboutUs from '../pages/AboutUs';
import Trips from '../pages/Trips';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/community',
                element: (
                    <PrivetRoute>
                        <Community />
                    </PrivetRoute>
                )
            },
            {
                path: '/about-us',
                element: (
                    <PrivetRoute>
                        <AboutUs />
                    </PrivetRoute>
                )
            },
            {
                path: '/trips',
                element: <Trips />
            },
            {
                path: '/myProfile',
                element: (
                    <PrivetRoute>
                        <MyProfile />
                    </PrivetRoute>
                )
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login />
                    },
                    {
                        path: '/auth/register',
                        element: <Register />
                    },
                    {
                        path: '/auth/profileUpdate',
                        element: <ProfileUpdate />
                    }
                ]
            }
        ]
    }
]);

export default routes;

