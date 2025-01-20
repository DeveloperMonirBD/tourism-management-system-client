import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2'; // Import SweetAlert

const AddPackagesForm = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const initialFormData = {
        photo: '',
        tour_type: '',
        trip_title: '',
        price: '',
        gallery: '',
        description: '',
        tour_plan: [{ day: '', title: '', description: '' }]
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleFormChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleTourPlanChange = (e, index) => {
        const { name, value } = e.target;
        const newTourPlan = [...formData.tour_plan];
        newTourPlan[index][name] = value;
        setFormData({
            ...formData,
            tour_plan: newTourPlan
        });
    };

    const mutation = useMutation({
        mutationFn: async packageData => {
            await axiosSecure.post('/api/packages', packageData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries('packages');
            Swal.fire({
                // Use SweetAlert for the success message
                icon: 'success',
                title: 'Success!',
                text: 'Data submitted successfully'
            });
            setFormData(initialFormData); // Reset form
        },
        onError: error => {
            Swal.fire({
                // Use SweetAlert for the error message
                icon: 'error',
                title: 'Error!',
                text: 'Error submitting data: ' + error.message
            });
        }
    });

    const handleSubmit = async e => {
        e.preventDefault();

        const finalData = {
            ...formData,
            gallery: formData.gallery.split(',')
        };

        mutation.mutate(finalData);
    };

    const addMore = () => {
        setFormData({
            ...formData,
            tour_plan: [...formData.tour_plan, { day: '', title: '', description: '' }]
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-7xl mx-auto p-8 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold text-center mb-6">Submit Tour Information</h1>

            <label className="block mb-2">Photo URL:</label>
            <input type="text" name="photo" value={formData.photo} onChange={handleFormChange} required className="w-full mb-4 p-2 border rounded" />

            <label className="block mb-2">Tour Type:</label>
            <input type="text" name="tour_type" value={formData.tour_type} onChange={handleFormChange} required className="w-full mb-4 p-2 border rounded" />

            <label className="block mb-2">Trip Title:</label>
            <input type="text" name="trip_title" value={formData.trip_title} onChange={handleFormChange} required className="w-full mb-4 p-2 border rounded" />

            <label className="block mb-2">Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleFormChange} required className="w-full mb-4 p-2 border rounded" />

            <label className="block mb-2">Gallery URLs (comma-separated):</label>
            <input type="text" name="photo" value={formData.photo} onChange={handleFormChange} required className="w-full mb-4 p-2 border rounded" />

            <label className="block mb-2">Description:</label>
            <textarea name="description" value={formData.description} onChange={handleFormChange} required className="w-full mb-4 p-2 border rounded" />

            <label className="block mb-2">Tour Plan:</label>
            {formData.tour_plan.map((plan, index) => (
                <div key={index} className="mb-4">
                    <input type="text" name="day" value={plan.day} onChange={e => handleTourPlanChange(e, index)} placeholder={`Day ${index + 1}`} className="w-full mb-2 p-2 border rounded" />
                    <input type="text" name="title" value={plan.title} onChange={e => handleTourPlanChange(e, index)} placeholder="Title" className="w-full mb-2 p-2 border rounded" />
                    <textarea name="description" value={plan.description} onChange={e => handleTourPlanChange(e, index)} placeholder="Description" className="w-full mb-2 p-2 border rounded" />
                </div>
            ))}
            <button type="button" onClick={addMore} className="py-2 px-4 bg-green-500 text-white rounded mb-4">
                Add More
            </button>

            <button type="submit" className="w-full py-2 bg-gray-700 text-white rounded text-lg">
                Submit
            </button>
        </form>
    );
};
export default AddPackagesForm;
