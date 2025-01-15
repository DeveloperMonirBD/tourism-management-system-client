import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hook/useAxiosPublic';

const AddStories = () => {
    const axiosPublic = useAxiosPublic();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    const handleImageChange = e => {
        setImages([...e.target.files]);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('text', text);
        images.forEach(image => {
            formData.append(`images`, image);
        });

        try {
            await axiosPublic.post('/api/stories', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            navigate('/dashboard/manageStories');
        } catch (error) {
            console.error('Error saving story:', error);
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
                    <input type="file" multiple onChange={handleImageChange} className="file-input file-input-bordered bg-bra" />
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
