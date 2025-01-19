import { useState, useEffect } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../../../hook/useAxiosSecure';

const ManageCandidates = () => {
    const [applications, setApplications] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await axiosSecure.get('/api/applications');
            setApplications(response.data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    const handleAccept = async (applicationId, userId) => {
        try {
            await axiosSecure.put(`/api/users/${userId}/role`, { role: 'tour-guide' });
            await axiosSecure.delete(`/api/applications/${applicationId}`);
            fetchApplications();
        } catch (error) {
            console.error('Error accepting application:', error);
        }
    };

    const handleReject = async applicationId => {
        try {
            await axiosSecure.delete(`/api/applications/${applicationId}`);
            fetchApplications();
        } catch (error) {
            console.error('Error rejecting application:', error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-700 mb-8 text-center">Manage Candidates</h1>
            <table className="min-w-full overflow-x-auto">
                <thead>
                    <tr className="text-base">
                        <th className="w-1/4 px-4 py-2">Name</th>
                        <th className="w-1/4 px-4 py-2">Email</th>
                        <th className="w-1/4 px-4 py-2">Role</th>
                        <th className="w-1/4 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map(application => (
                        <tr key={application._id} className="text-base text-center">
                            <td className="border px-4">{application.name}</td>
                            <td className="border px-4">{application.email}</td>
                            <td className="border px-4">{application.role}</td>
                            <td className="border px-4">
                                <div className="flex items-center justify-center gap-2 py-3">
                                    <button onClick={() => handleAccept(application._id, application.userId)} className="bg-green-500 text-white btn btn-sm">
                                        Accept
                                    </button>
                                    <button onClick={() => handleReject(application._id)} className=" btn btn-sm bg-red-500 text-white">
                                        Reject
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageCandidates;
