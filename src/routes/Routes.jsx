
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
import DashBoard from '../layouts/DashBoard';
import ManageProfile from '../pages/DashBoard/ManageProfile';
import MyBookings from '../pages/DashBoard/MyBookings';
import ManageStories from '../pages/DashBoard/ManageStories';
import AddStories from '../pages/DashBoard/AddStories';
import JoinAsTourGuide from '../pages/DashBoard/JoinAsTourGuide';
import PackageDetails from '../pages/DashBoard/Tablist/packages/packageDetails';
import GuideDetailsProfile from '../pages/DashBoard/Tablist/guides/GuideDetailsProfile';


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
                path: '/package/:id',
                element: <PackageDetails />
            },
            {
                path: '/tourGuide/:id',
                element: <GuideDetailsProfile />
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
    },
    {
        path: 'dashboard',
        element: <DashBoard />,
        children: [
            {
                path: 'manageProfile',
                element: <ManageProfile />
            },
            {
                path: 'myBookings',
                element: <MyBookings />
            },
            {
                path: 'manageStories',
                element: <ManageStories />
            },
            {
                path: 'addStories',
                element: <AddStories />
            },
            {
                path: 'joinAsTourGuide',
                element: <JoinAsTourGuide />
            },
        ]
    }
]);

export default routes;

