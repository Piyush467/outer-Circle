import React from "react";
import EventCard from "./EventCard";

const EventsSection = ({ event }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="font-semibold mb-4">Upcoming Events</h2>
      <EventCard event={event} />
    </div>
  );
};

export default EventsSection;