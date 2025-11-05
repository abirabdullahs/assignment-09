import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Profile = () => {

    const { user } = useAuth();
    const {editUser} = useOutletContext();

    // console.log(editUser)

  console.log(editUser);

    const Navigate = useNavigate();
    if (!user) {
        Navigate("/login");
        return;
    }

    editUser.Number = "01xxxxxxxxx";
    editUser.Institue = "hulululu university"

     const handleClick = () => {
       Navigate("/update-profile")
      };

    // console.log(user);
    return (
        <div>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center my-5">
                {/* Profile Image */}
                <img
                    className="w-24 h-24 rounded-full mx-auto border-4 border-primary object-cover"
                    src={editUser.photoURL || "https://i.postimg.cc/3JN5Kc5Q/default-avatar.png"}
                    alt="Profile"
                />

                {/* Name */}
                <h2 className="mt-4 text-xl font-bold">{editUser.displayName || "User Name"}</h2>

                {/* Details */}
                <div className="mt-2 space-y-1 text-gray-600">
                    <p><strong>Email:</strong> {editUser.email || "user@example.com"}</p>
                    <p><strong>Phone:</strong> {editUser.Number || "+880123456789"}</p>
                    <p><strong>University:</strong> {editUser.Institue || "Your University"}</p>
                </div>

                <div>
                    <button className='btn-primary bg-green-400 mt-7 px-5 rounded shadow-md py-1 w-full' onClick={handleClick}>Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;