import { useState, useContext, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../provider/AuthProvider';
import useGuides from '../../../hook/useGuides';

const BookingForm = () => {
    const { user } = useContext(AuthContext);
    const [guides] = useGuides();

    const [date, setDate] = useState(new Date());
    const [price, setPrice] = useState('');
    const [packageName, setPackageName] = useState('');
    const [guide, setGuide] = useState('');
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
                packageName,
                touristName: user?.displayName || '',
                touristEmail: user?.email || '',
                touristImageURL: user?.photoURL || '',
                price,
                tourDate: date,
                tourGuideName: guide
            };
            try {
                await axios.post('http://localhost:5000/api/bookings', bookingData);
                alert('Booking information saved with pending status');
                setModalOpen(true);
            } catch (error) {
                console.error('Error saving booking information:', error);
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-16 bg-white shadow-md rounded-md">
            <img src={user?.photoURL || 'default-image-url.jpg'} alt="Tourist" className="rounded-md mb-4" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name of the package</span>
                    </label>
                    <input type="text" value={packageName} onChange={e => setPackageName(e.target.value)} required className="input input-bordered" />
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
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} required className="input input-bordered" />
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
    );
};

export default BookingForm;
