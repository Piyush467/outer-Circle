import React from "react";

const HostSection = ({ host }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-3">Hosted By</h2>

      <div className="flex items-center gap-3">
        <img
          src={host.avatar}
          alt="host"
          className="w-12 h-12 rounded-full"
        />

        <div>
          <p className="font-medium">{host.name}</p>
          <p className="text-sm text-gray-500">{host.role}</p>
        </div>
      </div>
    </div>
  );
};

export default HostSection;