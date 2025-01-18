import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddStories = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    const handleAddImages = event => {
        setImages([...images, ...event.target.files]);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        let photo_urls = [];

        // Upload each image to imgbb
        for (const image of images) {
            const formData = new FormData();
            formData.append('image', image);
            const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);
            photo_urls.push(data.data.display_url);
        }

        if (!user) {
            navigate('/auth/login');
        } else {
            const storiesData = {
                name: user?.displayName || '',
                image: user?.photoURL || '',
                email: user?.email || '',
                title,
                text,
                photo_urls
            };
            try {
                await axiosPublic.post('/api/stories', storiesData);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Stories information saved with pending status',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/manageStories');
            } catch (error) {
                console.error('Error saving stories information:', error);
            }
        }
    };

    return (
        <div className="mx-auto p-12 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-semibold text-center mb-8 text-brandPrimary">Add Stories</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base">Title</span>
                    </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter story title" required className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base">Text</span>
                    </label>
                    <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Write your story description here" required className="textarea textarea-bordered"></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base">Images</span>
                    </label>
                    <input type="file" onChange={handleAddImages} accept="image/*" multiple className="file-input file-input-bordered bg-bra" />
                </div>

                <div className="form-control">
                    <button className="mt-4 px-6 py-2 text-white bg-gray-700 text-lg rounded-md" type="submit">
                        Add Story
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStories;
