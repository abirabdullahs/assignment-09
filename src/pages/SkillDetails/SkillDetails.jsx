import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SkillDetails = () => {
    const { id } = useParams();
    const dataPrimary = useLoaderData();
    const data = dataPrimary?.find(item => item.skillId.toString() === id);
    if (!dataPrimary || dataPrimary.length === 0)
  return <div className="text-center text-red-500 mt-10">No data available</div>;

    console.log(data);


    const handleBookSession = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    e.target.reset();
  };

    return (
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-5 items-center">

            {/* Details Section */}
            <div className="max-w-3/4 mx-auto bg-white rounded-xl overflow-hidden">
                <img src={data.image} alt={data.skillName} className="w-full h-72 object-cover" />
                <div className="p-6 space-y-3">
                    <h2 className="text-3xl font-semibold">{data.skillName}</h2>
                    <p className="text-gray-600">By <b>{data.providerName}</b></p>
                    <p><b>Category:</b> {data.category}</p>
                    <p><b>Price:</b> ${data.price}</p>
                    <p><b>Rating:</b> ⭐ {data.rating}</p>
                    <p><b>Slots Available:</b> {data.slotsAvailable}</p>
                    <p className="text-gray-700 mt-2">{data.description}</p>
                </div>
            </div>

            {/* Book Session Form */}
            <div className="max-w-lg mx-auto mt-10 bg-gray-50 p-6 rounded-lg shadow w-full">
                <h3 className="text-2xl font-semibold mb-4 text-center">Book a Session</h3>
                <form onSubmit={handleBookSession} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input type="text" name="name" className="w-full border px-3 py-2 rounded-md" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input type="email" name="email" className="w-full border px-3 py-2 rounded-md" required />
                    </div>
                    <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SkillDetails;