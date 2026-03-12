import React from "react";

const LocationSection = ({ location }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-3">Location</h2>

      <iframe
        src={location.mapUrl}
        className="w-full h-56 rounded-lg border"
        loading="lazy"
      />

      <button className="mt-3 w-full bg-[#E31C5D] text-white py-2 rounded-full">
        Get Directions
      </button>
    </div>
  );
};

export default LocationSection;