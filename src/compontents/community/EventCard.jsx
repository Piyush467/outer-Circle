import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();   // ✅ MUST be here (top level)

  return (
    <div
      onClick={() => navigate(`/event/${event.id}`)}   // ✅ navigate on click
      className="flex gap-4 bg-white p-4 rounded-xl shadow text-gray-900 cursor-pointer hover:shadow-lg transition"
    >

      {/* Event Image */}
      <img
        src={event.image}
        alt="event"
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Event Info */}
      <div className="flex-1">

        <h3 className="font-semibold text-lg">
          {event.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {event.date}
        </p>

        <p className="text-sm text-gray-500">
          {event.location}
        </p>

        <p className="text-pink-400 text-sm mt-2 font-medium">
          Spots left: {event.spotsLeft}
        </p>

      </div>
    </div>
  );
};

export default EventCard;