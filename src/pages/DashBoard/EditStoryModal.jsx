/* eslint-disable react/prop-types */
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useState } from 'react';


const EditStoryModal = ({ story, onClose, onUpdate }) => {
    const [updatedStory, setUpdatedStory] = useState(story);
    const [title, setTitle] = useState(story.title);
    const [text, setText] = useState(story.text);
    const [newPhotos, setNewPhotos] = useState([]);
    const axiosSecure = useAxiosSecure();

    const handleUpdate = async event => {
        event.preventDefault();

        let photo_url = updatedStory.photo_url;

        // Upload new photos to imgbb and update photo_url with the new URLs
        if (newPhotos.length > 0) {
            const formData = new FormData();
            newPhotos.forEach(photo => formData.append('image', photo));

            try {
                const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);
                if (Array.isArray(photo_url)) {
                    photo_url.push(data.data.display_url);
                } else {
                    photo_url = [data.data.display_url];
                }
            } catch (error) {
                console.error('Error uploading photo:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'An error occurred while uploading the photo. Please try again later.',
                    icon: 'error'
                });
                return;
            }
        }

        const updatedData = { ...updatedStory, title, text, photo_url };
        console.log(updatedData)

        try {
            const response = await axiosSecure.put(`/api/stories/${updatedStory._id}`, updatedData);
            console.log('API response:', response);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your story has been updated',
                showConfirmButton: false,
                timer: 1500
            });
            onUpdate();
            onClose();
        } catch (error) {
            console.error('Error updating story:', error);
            Swal.fire({
                title: 'Error',
                text: 'An error occurred while updating the story. Please try again later.',
                icon: 'error'
            });
        }
    };
    

    // Add new photo to the story
    const handleAddPhoto = event => {
        setNewPhotos([...newPhotos, ...event.target.files]);
    };

    // Remove photo from the story
    const handleRemovePhoto = removedPhotoUrl => {
        if (Array.isArray(updatedStory.photo_url)) {
            setUpdatedStory({
                ...updatedStory,
                photo_url: updatedStory.photo_url.filter(url => url !== removedPhotoUrl)
            });
        } else {
            setUpdatedStory({
                ...updatedStory,
                photo_url: updatedStory.photo_url !== removedPhotoUrl ? updatedStory.photo_url : []
            });
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-xl font-semibold mb-4">Edit Story</h2>
                <form onSubmit={handleUpdate}>
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
                        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Write your story description here" required className="textarea textarea-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base">Images</span>
                        </label>
                        {Array.isArray(updatedStory.photo_url)
                            ? updatedStory.photo_url.map((photo, index) => (
                                  <div key={index} className="flex items-center gap-2 mb-2">
                                      <img src={photo} alt="Story" className="h-16 w-16 object-cover rounded-lg" />
                                      <button type="button" onClick={() => handleRemovePhoto(photo)} className="text-red-500 underline">
                                          Remove
                                      </button>
                                  </div>
                              ))
                            : updatedStory.photo_url && (
                                  <div className="flex items-center gap-2 mb-2">
                                      <img src={updatedStory.photo_url} alt="Story" className="h-16 w-16 object-cover rounded-lg" />
                                      <button type="button" onClick={() => handleRemovePhoto(updatedStory.photo_url)} className="text-red-500 underline">
                                          Remove
                                      </button>
                                  </div>
                              )}
                        <input type="file" onChange={handleAddPhoto} accept="image/*" multiple className="file-input file-input-bordered bg-bra" />
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                            Cancel
                        </button>
                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditStoryModal;
