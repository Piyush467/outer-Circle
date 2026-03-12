import React from "react";
import {  useNavigate } from "react-router-dom";
import communityData from "./communityData";
import AboutEventSection from "./AboutEventSection";

import {
  ArrowLeft,
  Share2,
  Flag,
  Calendar,
  MapPin,
  HelpCircle,
  Navigation
} from "lucide-react";

const EventDetailsPage = () => {
  const navigate = useNavigate();

  const event = communityData.event;
  const host = communityData.host;

  return (
    <div className="bg-gray-50 text-gray-900  min-h-screen pb-24">

      {/* ===== TOP POSTER ===== */}
      <div className="relative">

        <img
          src={event.image}
          alt="poster"
          className="w-full h-64 object-cover"
        />

        {/* Top Icons */}
        <div className="absolute top-4 left-4 right-4 flex justify-between">

          <button
            onClick={() => navigate(-1)}
            className="bg-white/90 shadow p-3 rounded-full"
          >
            <ArrowLeft size={20} className="text-gray-800" />
          </button>

          <div className="flex gap-3">
            <button className="bg-white shadow p-3 rounded-full">
              <Share2 size={20} className="text-gray-800"  />
            </button>

            <button className="bg-white shadow p-3 rounded-full">
              <Flag size={20} className="text-gray-800"/>
            </button>
          </div>

        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="px-5 py-6 space-y-6">

        {/* Title */}
        <h1 className="text-2xl font-semibold">
          {event.title}
        </h1>

        {/* Event Info Cards */}
        <div className="space-y-4">

          {/* Date */}
          <InfoRow
            icon={<Calendar />}
            title="April 1, 2026"
            subtitle="Wednesday, 9:30 PM – 11:59 PM"
          />

          {/* Location */}
          <InfoRow
            icon={<MapPin />}
            title={event.location}
          />

          {/* Going */}
          <InfoRow
            icon={<HelpCircle />}
            title="0 Going"
          />

        </div>

        {/* Organizer */}
        <div className="flex items-center gap-4 pt-4">
          <img
            src={host.avatar}
            alt="host"
            className="w-12 h-12 rounded-xl bg-pink-500 p-2"
          />
          <span className="text-lg font-medium">
            {communityData.name}
          </span>
        </div>

        {/* About Event */}
        {/* About Event */}
          <AboutEventSection description={event.description} />

        {/* Location Map */}
        <div className="pt-6 space-y-3">
          <h2 className="text-lg font-semibold">Location</h2>

          <div className="rounded-xl overflow-hidden">
            <iframe
              src={communityData.location.mapUrl}
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </div>

          {/* Get Directions */}
          <button className="w-full bg-gray-100 text-pink-400 py-3 rounded-xl flex items-center justify-center gap-2 font-medium">
            <Navigation size={18} />
            Get Directions
          </button>
        </div>

      </div>

      {/* ===== STICKY REGISTER BUTTON ===== */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-200">
        <button className="w-full bg-[#E31C5D] py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#c91852] transition">
          Register
        </button>
      </div>

    </div>
  );
};

export default EventDetailsPage;



/* ===== SMALL REUSABLE COMPONENT ===== */

const InfoRow = ({ icon, title, subtitle }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-gray-100 p-3 rounded-xl">
      {icon}
    </div>

    <div>
      <p className="font-medium">{title}</p>
      {subtitle && (
        <p className="text-gray-500 text-sm">{subtitle}</p>
      )}
    </div>
  </div>
);