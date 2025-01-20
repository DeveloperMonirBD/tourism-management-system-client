import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';

const JoinAsTourGuide = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [applicationTitle, setApplicationTitle] = useState('');
    const [whyGuide, setWhyGuide] = useState('');
    const [cvLink, setCvLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = {
            name: user?.displayName || '',
            image: user?.photoURL || '',
            email: user?.email || '',
            applicationTitle,
            whyGuide,
            cvLink
        };

        try {
            await axiosSecure.post('/api/applications', formData);
            Swal.fire({
                title: 'Application Successful',
                text: 'Your application has been successfully submitted!',
                icon: 'success',
                confirmButtonText: 'Okay'
            }).then(() => {
                setApplicationTitle('');
                setWhyGuide('');
                setCvLink('');
            });
            setShowModal(true);
        } catch (error) {
            console.error('Error submitting application:', error);
            Swal.fire({
                title: 'Submission Error',
                text: 'There was a problem submitting your application. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        }
    };

    return (
        <div className="container mx-auto p-12 bg-white shadow-md rounded-md mt-10">
            <h2 className="text-3xl font-semibold mb-6 text-center">Join as a Tour Guide</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="applicationTitle">
                        Application Title:
                    </label>
                    <input
                        type="text"
                        id="applicationTitle"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter application title"
                        required
                        value={applicationTitle}
                        onChange={e => setApplicationTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="whyGuide">
                        Why do you want to be a Tour Guide:
                    </label>
                    <textarea
                        id="whyGuide"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        placeholder="Write description"
                        required
                        value={whyGuide}
                        onChange={e => setWhyGuide(e.target.value)}></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="cvLink">
                        CV Link:
                    </label>
                    <input
                        type="url"
                        id="cvLink"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter cv link"
                        required
                        value={cvLink}
                        onChange={e => setCvLink(e.target.value)}
                    />
                </div>
                <button type="submit" className="px-6 py-2 mt-4 bg-gray-700 text-white rounded-md w-full text-lg">
                    Submit
                </button>
            </form>

            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md">
                        <h2 className="text-xl mb-4">Application Successful</h2>
                        <p>Your application has been successfully submitted!</p>
                        <button onClick={() => setShowModal(false)} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JoinAsTourGuide;
