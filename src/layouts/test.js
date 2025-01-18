import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyComponent = () => {
    const { user } = useContext(AuthContext);
    const userRole = user.role; // Assuming 'role' is a property on the user object

    const renderBasedOnRole = () => {
        switch (userRole) {
            case 'admin':
                return (
                    <div>
                        {/* Admin specific content */}
                        <p>Welcome, Admin! You have full access.</p>
                        <button className="btn">Manage Users</button>
                    </div>
                );

            case 'tourGuide':
                return (
                    <div>
                        {/* Tour Guide specific content */}
                        <p>Welcome, Tour Guide! You can manage your tours.</p>
                        <button className="btn">Create New Tour</button>
                    </div>
                );

            case 'normal':
                return (
                    <div>
                        {/* Normal User specific content */}
                        <p>Welcome, Tourist! Browse and book tours.</p>
                        <button className="btn">Book a Tour</button>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <h2>Role Based Content</h2>
            {renderBasedOnRole()}
        </div>
    );
};

export default MyComponent;
