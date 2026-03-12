import React, { useState } from "react";

const AboutEventSection = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  const shortText = description.slice(0, 160); // preview length

  return (
    <div className="bg-white text-gray-900 shadow p-5 rounded-2xl">

      <h2 className="text-lg font-semibold mb-3">
        About Event
      </h2>

      <p className="text-gray-600 leading-relaxed">
        {expanded ? description : `${shortText}...`}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-pink-500 font-semibold"
      >
        {expanded ? "Read Less" : "Read More..."}
      </button>

    </div>
  );
};

export default AboutEventSection;