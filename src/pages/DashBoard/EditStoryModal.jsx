import { useState } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';


const EditStoryModal = ({ story, onClose, refetch }) => {
    const [title, setTitle] = useState(story.title);
    const [text, setText] = useState(story.text);
    const [newImage, setNewImage] = useState(null);
    const axiosPublic = useAxiosPublic();

    const handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('text', text);
        if (newImage) {
            formData.append('image', newImage);
        }

        try {
            const { data } = await axiosPublic.put(`/api/stories/${story._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (data.success) {
                refetch();
                onClose();
            } else {
                console.error('Error updating story:', data.message);
            }
        } catch (error) {
            console.error('Error updating story:', error);
        }
    };

    const handleImageChange = e => {
        const file = e.target.files[0];
        setNewImage(file);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Edit Story</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <textarea value={text} onChange={e => setText(e.target.value)} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="file" onChange={handleImageChange} className="form-control" />
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button type="button" onClick={onClose} className="btn btn-secondary mr-2">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditStoryModal;
