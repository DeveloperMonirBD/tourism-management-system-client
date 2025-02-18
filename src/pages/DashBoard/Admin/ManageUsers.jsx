import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [selectedRole] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Fetch users
    const fetchUsers = async filters => {
        const { data } = await axiosSecure.get('/api/users', { params: filters });
        return data;
    };

    const {
        data: users,
        isLoading,
        refetch
    } = useQuery({
        queryKey: ['users',  selectedRole ],
        queryFn: () => fetchUsers({ role: selectedRole }),
        initialData:[]
    });

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    // search input function
    const handleSearchChange = e => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        if (searchTerm === '') {
            setFilteredUsers(users);
        } else {
            setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
        }
    };

    // filter option
    const handleFilterChange = e => {
        const userType = e.target.value;
        if (userType === '') {
            setFilteredUsers(users);
        } else {
            setFilteredUsers(users.filter(user => user.role === userType));
        }
    };


    // Update user role
    const handleRoleChange = async (email, newRole) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: `Do you want to change the user role to ${newRole}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, change it!'
            });

            if (result.isConfirmed) {
                await axiosSecure.put(`/api/users/${email}`, { role: newRole });
                refetch();
                Swal.fire('Success!', 'User role has been updated.', 'success');
            }
        } catch (error) {
            console.error('Error updating role:', error);
            Swal.fire('Error!', 'Failed to update user role.', 'error');
        }
    };

    if (isLoading) return <p>Loading users...</p>;

    return (
        <div className="min-h-screen bg-gray-100 p-6 dark:bg-neutral dark:text-white">
            <h1 className="text-3xl font-bold my-6 text-center mb-10">Manage Users</h1>
            <div className="md:flex justify-between">
                {/* search input  */}
                <div className="mb-8 flex items-center gap-6">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search by email"
                        className="mt-1 block w-[300px] pl-3 pr-10 py-3 text-base border  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-neutral dark:text-white"
                    />
                </div>

                {/* input field  */}
                <div className="mb-8 md:w-[360px]">
                    <select
                        id="userType"
                        name="userType"
                        onChange={handleFilterChange}
                        className="dark:ml-2 mt-2 block w-full pl-3 pr-10 py-3 text-base border-brandPrimary focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-lg dark:bg-gray-800 dark:text-white dark:border dark:border-gray-400 ">
                        <option value="">All User Types</option>
                        <option value="Tourist">Tourist</option>
                        <option value="Guide">Guide</option>
                    </select>
                </div>
            </div>

            <div className=" rounded p-4 overflow-x-auto shadow">
                <table className="table-auto w-full text-left border-collapse mb-24 ">
                    <thead>
                        <tr>
                            <th className="border-b px-4 py-2">Name</th>
                            <th className="border-b px-4 py-2">Email</th>
                            <th className="border-b px-4 py-2">Role</th>
                            <th className="border-b px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user._id}>
                                <td className="border-b px-4 py-2">{user.name}</td>
                                <td className="border-b px-4 py-2">{user.email}</td>
                                <td className="border-b px-4 py-2">{user.role}</td>
                                <td className="border-b px-4 py-2 dark:text-neutral">
                                    {user.role !== 'Admin' && (
                                        <Select
                                            options={[
                                                { value: 'Tourist', label: 'Tourist' },
                                                { value: 'Guide', label: 'Guide' }
                                            ]}
                                            value={{ value: user.role, label: user.role }}
                                            onChange={selected => handleRoleChange(user.email, selected.value)}
                                            className="w-40"
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
