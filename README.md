### Assignment12_Category_0003

# Tourism Management System

## Live URI

Live Site:

## Overview

The Tourist Guide site is an online platform designed to be a comprehensive resource for travelers. It provides detailed information on popular destinations in Bangladesh, helping users plan their
trips effectively.

## Features

-   **Responsive Design**: Made for mobile, tablet, and desktop views. The dashboard is also responsive.
-   **Dynamic Content**: Highlights popular destinations, cultural insights, and culinary delights of Bangladesh.
-   **User Roles**: Supports Normal users/Tourists, Tour Guides, and Admins with differentiated functionalities.
-   **Authentication System**: Allows user registration, login, Google login, password reset, and token-based authentication.
-   **Alert Notifications**: Shows sweet alerts/toasts for all CRUD operations, successful login, and sign-up.
-   **Secure Environment Setup**: Firebase config keys and MongoDB credentials are hidden using environment variables.
-   **Random Data Display**: Uses the $sample operator of MongoDB to fetch random packages and tour guides for each visit.

## Key Rules

-   **GitHub Commits**: Minimum of 20 notable commits on the client side and 12 on the server side.
-   **No Lorem Ipsum**: Use meaningful content instead of placeholder text.
-   **Private Routes**: Ensure users are not redirected to the login page after reloading a private route.
-   **Tanstack Query**: Used for all data fetching functionality (GET method

## Pages

### HomePage

-   **Banner/Slider Section**
-   **Overview Section**
-   **Tourism and Travel Guide Section**: Features two tabs
-   "Our Packages" and "Meet Our Tour Guides".
-   **Tourist Story Section**: Displays random stories and allows users to share them on Facebook.
-   **Additional Sections**: Customize with two more relevant

### Package Details Page

-   **Gallery**: Show pictures of places to be visited.
-   **Tour Information**: Relevant details about the tour.
-   **Tour Plan**: Detailed itinerary of the tour.
-   **Booking Form**: Protected booking form for logged-in users.

### Community Page

-   Show all user-added stories and implement react-share for sharing.

### About Us Page

-   Developer information and links to other projects.

### All Trips Page

-   Display all available packages with details.

### Tour Guide Profile Page

-   Information about the tour guides and their stories.

### Dashboards

-   **Tourist Dashboard**: Manage profile, bookings, stories, and apply as a tour guide.
-   **Tour Guide Dashboard**: Manage profile, assigned tours, and stories.
-   **Admin Dashboard**: Manage profile, tours, payments, tour guides, packages, clients, and stories.

## Admin Login

-   **Admin Username**: [Your Admin Username]
-   **Admin Password**: [Your Admin Password]
-   **Live Site URL**: [Your Live Site URL]

## Technology Stack

### Frontend:

    -   React.js
    -   Tanstack Query
    -   React Router
    -   Tailwind CSS
    -   React-Share
    -   React-Toastify/SweetAlert2 for notifications
    -   React Rating Stars Component for ratings
    -   Animations with Framer Motion
    -   Axios Interceptors
    -

## Backend:

    -   Node.js
    -   Express.js
    -   MongoDB
    -   JWT for authentication
    -   Firebase for user authentication

## Database:

    - MongoDB

## Authentication:

    - Firebase

## Dependencies

    -   Firebase for frontend
    -   Vercel for backend

    ## Getting Started

### Prerequisites

-   Node.js and npm installed on your machine.
-   Modern web browser (Chrome/Edge) with support for the Web Speech API.

### Installation

1. Clone the repository: `https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-DeveloperMonirBD.git`, `cd b10a12-client-side`

2. Install the dependencies: `bash npm install `

3. Start the development server:

`bash npm start `

4. Open your browser and navigate to

`.........` to view the application.

## What to Submit

Assignment Category: Tourism Management System - 0003

Your client-side code GitHub repository link : https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-DeveloperMonirBD

Your server-side code GitHub repository link: https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-DeveloperMonirBD

Live link to the deployed project :

**Enjoy exploring the beautiful landscapes and cultures of Bangladesh with the Tourist Guide site!**

If you encounter any issues or need help, feel free to reach out.
