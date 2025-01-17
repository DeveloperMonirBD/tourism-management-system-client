import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';
// import StripeCheckout from 'react-stripe-checkout';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    // Fetch stories using tanstack query
    const { data: booking = []} = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/bookings/${user.email}`);
            return res.data;
        }
    });


    const handlePayment = bookingId => {
        // Logic to handle payment
    };

    const handleCancel = bookingId => {
        // Logic to handle cancel booking
    };

    return (
        <div className="overflow-x-auto mt-10 ">
            <div className='flex justify-between pl-3 items-center mb-6 text-lg lg:text-xl font-semibold'>
                <h3>Items: {booking.length} </h3>
                <h3>Total Price: {booking.length} </h3>
                <h3>Total Price: {booking.length} </h3>
                <button className='btn text-lg'>Pay</button>
            </div>
            <table className="table text-base">
                {/* head */}
                <thead className="bg-gray-100 text-neutral">
                    <tr className="text-base">
                        <th>#</th>
                        <th>Image</th>
                        <th>Package</th>
                        <th>Tour Guide</th>
                        <th>Tour Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.map((booking, index) => (
                        <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{booking.name}</div>
                                        <div className="text-sm opacity-50">{booking.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{booking.packageName}</td>
                            <td>{booking.tourGuideName}</td>
                            <td>{booking.data}</td>
                            <td>{booking.price}</td>
                            <td>
                                <span className="bg-green-100 px-3 p-1 rounded-xl text-red-300 font-semibold">In Review</span>

                                {/* {booking.status === 'Pending'
                                    && (
                                    <>
                                        <StripeCheckout token={token => handlePayment(booking.id)} stripeKey="your-stripe-public-key" amount={booking.price * 100} name="Payment" />
                                        <button onClick={() => handleCancel(booking.id)}>Cancel</button>
                                    </>
                                )} */}
                            </td>
                            <th>
                                <button className="btn btn-ghost text-base">Cansel</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;
