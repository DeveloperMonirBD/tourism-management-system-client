import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';
import { format } from 'date-fns';

const MyAssignedTour = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: booking = [], refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/bookings`);
            return res.data;
        }
    });

    const totalPrice = booking.reduce((total, item) => total + Number(item.price || 0), 0);

    const handleAccept = async id => {
        try {
            await axiosSecure.put(`/api/bookings/${id}`, { status: 'Accepted' });
            refetch();
            Swal.fire('Accepted!', 'Booking status has been accepted.', 'success');
        } catch (error) {
            Swal.fire('Error', 'Could not update status', 'error');
        }
    };

    const handleReject = async id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reject it!'
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure
                    .put(`/api/bookings/${id}`, { status: 'Rejected' })
                    .then(() => {
                        refetch();
                        Swal.fire('Rejected!', 'Booking status has been rejected.', 'success');
                    })
                    .catch(error => {
                        Swal.alert('Error', 'Could not update status', 'error');
                    });
            }
        });
    };

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/api/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire('Deleted!', 'Your booking has been cancelled.', 'success');
                        }
                    })
                    .catch(error => {
                        Swal.fire('Error', 'Could not cancel booking', 'error');
                    });
            }
        });
    };

    console.log(booking)

    return (
        <div className="overflow-x-auto mt-10">
            <div className="flex justify-between pl-3 items-center mb-6 text-lg lg:text-xl font-semibold">
                <h3>Items: {booking.length} </h3>
                <h3>Total Price: ${totalPrice} </h3>
            </div>
            <table className="table text-base">
                <thead className="bg-gray-100 text-neutral">
                    <tr className="text-base">
                        <th>#</th>
                        <th>Package Name</th>
                        <th>Tourist Name</th>
                        <th>Tour Date</th>
                        <th>Tour Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.map((booking, index) => (
                        <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>{booking.packageName}</td>
                            <td>{booking.name}</td>
                            <td>{format(new Date(booking.tourDate), 'P')}</td>
                            <td>{booking.price}</td>
                            <td className="flex gap-6">
                                <span className="bg-green-100 px-3 p-1 rounded-xl text-red-300 font-semibold">{booking.status}</span>
                                {booking.status === 'Pending' && (
                                    <div>
                                        <button className="btn btn-sm btn-success ml-2" disabled>
                                            Accept
                                        </button>
                                        <button className="btn btn-sm btn-danger ml-2" onClick={() => handleReject(booking._id)}>
                                            Reject
                                        </button>
                                    </div>
                                )}
                                {booking.status === 'In Review' && (
                                    <div>
                                        <button className="btn btn-sm btn-success ml-2" onClick={() => handleAccept(booking._id)}>
                                            Accept
                                        </button>
                                        <button className="btn btn-sm btn-danger ml-2" onClick={() => handleReject(booking._id)}>
                                            Reject
                                        </button>
                                    </div>
                                )}
                            </td>
                            <th>
                                <button onClick={() => handleDelete(booking._id)} className="btn btn-sm btn-ghost text-base">
                                    Cancel
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAssignedTour;
