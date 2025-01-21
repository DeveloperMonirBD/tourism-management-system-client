import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hook/useAxiosSecure';

const ManageCandidates = () => {
    const axiosSecure = useAxiosSecure();

    const fetchApplications = async () => {
        const { data } = await axiosSecure.get('/api/applications');
        return data;
    };

    const {
        data: applications = [],
        isLoading,
        refetch
    } = useQuery({
        queryKey: ['applications'],
        queryFn: fetchApplications
    });

    const handleAccept = async (applicationId, email) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to accept this application and change the role to Guide?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, accept it!'
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    // Update the user's role to "Guide"
                    await axiosSecure.put(`/api/users/${email}`, { role: 'Guide' }); // Use applicationId as the user identifier

                    // Delete the application
                    await axiosSecure.delete(`/api/applications/${applicationId}`);

                    refetch();
                    Swal.fire('Accepted!', 'The application has been accepted and user role updated.', 'success');
                } catch (error) {
                    console.error('Error accepting application:', error);
                    Swal.fire('Error!', 'There was an issue accepting the application.', 'error');
                }
            }
        });
    };



    
    const handleReject = applicationId => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to reject this application?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reject it!'
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.delete(`/api/applications/${applicationId}`);
                    refetch();
                    Swal.fire('Rejected!', 'The application has been rejected.', 'success');
                } catch (error) {
                    console.error('Error rejecting application:', error);
                    Swal.fire('Error!', 'There was an issue rejecting the application.', 'error');
                }
            }
        });
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-4 text-center mt-6">Manage Candidates</h1>
            <div className=" shadow rounded px-4 pt-10 pb-24 overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b px-4 py-2">Name</th>
                            <th className="border-b px-4 py-2">Email</th>
                            <th className="border-b px-4 py-2">Application Title</th>
                            <th className="border-b px-4 py-2">Why Guide</th>
                            <th className="border-b px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map(app => (
                            <tr key={app._id}>
                                <td className="border-b px-4 py-2">{app.name}</td>
                                <td className="border-b px-4 py-2">{app.email}</td>
                                <td className="border-b px-4 py-2">{app.applicationTitle}</td>
                                <td className="border-b px-4 py-2">{app.whyGuide}</td>
                                <td className="border-b px-4 py-2">
                                    <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleAccept(app._id, app.email)}>
                                        Accept
                                    </button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleReject(app._id)}>
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCandidates;
