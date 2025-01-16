import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import { AuthContext } from '../../../provider/AuthProvider';
import axios from 'axios';

const AddStories = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        // image file upload in the imgbb start
        const image = e.target.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        // send image data to imgbb
        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);
        
        const image_url = data.data.display_url;

        if (!user) {
            navigate('/auth/login');
        } else {
            const storiesData = {
                touristName: user?.displayName || '',
                touristEmail: user?.email || '',
                touristImageURL: user?.photoURL || '',
                title,
                text,
                image_url
            };
            try {
                await axiosPublic.post('/api/stories', storiesData);
                alert('Stories information saved with pending status');
                navigate('/dashboard/manageStories');
            } catch (error) {
                console.error('Error saving stories information:', error);
            }
        }
    };

    return (
        <div className=" mx-auto p-12 bg-white shadow-md rounded-md">
            <h1 className="text-4xl font-bold text-center mb-8 text-brandPrimary">Add Stories</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Text</span>
                    </label>
                    <textarea value={text} onChange={e => setText(e.target.value)} required className="textarea textarea-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Images</span>
                    </label>
                    <input required type="file" name='image' accept='image/*' multiple  className="file-input file-input-bordered bg-bra" />
                </div>

                <div className="form-control mt-4">
                    <button className="btn bg-brandPrimary text-white text-lg hover:text-brandPrimary" type="submit">
                        Submit Story
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStories;
