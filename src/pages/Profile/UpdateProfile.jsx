import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProfile = () => {

    const Navigate = useNavigate();

    const { editUser, setEditUser } = useOutletContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(editUser)
        toast("saved Changes");
        Navigate("/profile")
    }
    return (
        <div className='flex justify-center p-20'>
            <form onSubmit={handleSubmit} className="space-y-4 w-5xl p-5 shadow-md">
                {/* Image URL */}
                <div>
                    <label className="block mb-1 font-medium">Profile Image URL</label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={editUser?.photoURL || ""}
                        onChange={(e) =>
                            setEditUser({ ...editUser, photoURL: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Name */}
                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={editUser?.displayName || ""}
                        onChange={(e) =>
                            setEditUser({ ...editUser, displayName: e.target.value })
                        }
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Number */}
                <div>
                    <label className="block mb-1 font-medium">Number</label>
                    <input
                        type="text"
                        name="number"
                        placeholder="Number"
                        value={editUser?.Number || ""}
                        onChange={(e) =>
                            setEditUser({ ...editUser, Number: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Institute */}
                <div>
                    <label className="block mb-1 font-medium">Institute</label>
                    <input
                        type="text"
                        name="institute"
                        placeholder="Institute"
                        value={editUser?.Institue || ""}
                        onChange={(e) =>
                            setEditUser({ ...editUser, Institue: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;