
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
import JoinAsTourGuide from '../pages/DashBoard/JoinAsTourGuide';
import PackageDetails from '../pages/Tablist/packages/packageDetails';
import GuideDetailsProfile from '../pages/Tablist/guides/GuideDetailsProfile';
import BookingForm from '../pages/Tablist/packages/BookingForm';
import AddStories from '../pages/DashBoard/addStories/AddStories';
import MyAssignedTour from '../pages/DashBoard/Guide/MyAssignedTour';
import AddPackagesForm from '../pages/DashBoard/Admin/AddPackagesForm';
import ManageUsers from '../pages/DashBoard/Admin/ManageUsers';
import AdminStatistics from '../pages/DashBoard/Admin/Statistics/AdminStatistics';
import AdminProfile from '../pages/DashBoard/Admin/Profile/AdminProfile';



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
                element: <Community />
            },
            {
                path: '/about-us',
                element: <AboutUs />
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
                path: '/booking',
                element: (
                    <PrivetRoute>
                        <BookingForm />
                    </PrivetRoute>
                )
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
        element: (
            <PrivetRoute>
                <DashBoard />
            </PrivetRoute>
        ),
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
            {
                path: 'myAssignedTour',
                element: <MyAssignedTour />
            },
            {
                path: 'AddPackagesForm',
                element: <AddPackagesForm />
            },
            {
                path: 'manageUsers',
                element: <ManageUsers />
            },
            {
                path: 'adminProfile',
                element: <AdminProfile />
            },
            {
                path: 'adminStatistics',
                element: <AdminStatistics />
            }
        ]
    }
]);

export default routes;

