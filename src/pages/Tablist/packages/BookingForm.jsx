import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import useGuides from '../../../hook/useGuides';
import { AuthContext } from '../../../provider/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const BookingForm = ({ packageTitle, packagePrice }) => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [guides] = useGuides();

    const [date, setDate] = useState(new Date());
    const [guide, setGuide] = useState(guides.length > 0 ? guides[0].name : '');
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (guides.length > 0 && !guide) {
            setGuide(guides[0].name);
        }
    }, [guides, guide]);

    const handleSubmit = async e => {
        e.preventDefault();
        if (!user) {
            navigate('/auth/login');
        } else {
            const bookingData = {
                name: user?.displayName || '',
                image: user?.photoURL || '',
                email: user?.email || '',
                packageName: packageTitle,
                price: packagePrice,
                tourDate: date,
                tourGuideName: guide,
                status: 'Pending'
            };
            try {
                await axiosPublic.post('/api/bookings', bookingData);

                Swal.fire({
                    title: 'Booking information saved with pending status',
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `
                    }
                });

                setModalOpen(true);
            } catch (error) {
                console.error('Error saving booking information:', error);
            }
        }
    };

    return (
        <div className="my-20">
            <h2 className="text-center font-bold text-4xl mb-10">Booking Now</h2>
            <div className="container mx-auto p-6 md:p-16 bg-white shadow-md rounded-md">
                <img src={user?.photoURL || 'default-image-url.jpg'} alt="Tourist" className="rounded-md mb-4" />
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name of the Package</span>
                        </label>
                        <input type="text" value={packageTitle} readOnly required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Name</span>
                        </label>
                        <input type="text" value={user?.displayName || ''} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Email</span>
                        </label>
                        <input type="email" value={user?.email || ''} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Image URL</span>
                        </label>
                        <input type="text" value={user?.photoURL || ''} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" value={packagePrice} readOnly required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Date</span>
                        </label>
                        <DatePicker selected={date} onChange={date => setDate(date)} required className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Guide Name</span>
                        </label>
                        <select value={guide} onChange={e => setGuide(e.target.value)} required className="select select-bordered w-full">
                            {guides.map(guide => (
                                <option key={guide.id} value={guide.name}>
                                    {guide.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn bg-brandPrimary hover:text-brandPrimary text-white transition text-lg" type="submit">
                            Book Now
                        </button>
                    </div>
                </form>

                {modalOpen && (
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Confirm your Booking</h3>
                            <div className="modal-action">
                                <button onClick={() => setModalOpen(false)} className="btn">
                                    Close
                                </button>
                                <button className="btn btn-primary" onClick={() => navigate('/dashboard/myBookings')}>
                                    Go to My Bookings
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingForm;
