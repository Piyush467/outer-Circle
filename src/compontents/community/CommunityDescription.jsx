import React, { useState } from "react";

const CommunityDescription = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <p className="text-gray-700">{data.description}</p>

      {expanded && (
        <ul className="mt-3 space-y-1 text-gray-600">
          {data.features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[#E31C5D] mt-2 text-sm"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default CommunityDescription;