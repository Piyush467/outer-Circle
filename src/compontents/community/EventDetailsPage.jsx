import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

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
  const { id } = useParams();

  const event = communityData.event;
  const host = communityData.host;

  // register handler
  const handleRegister = () => {
  window.open(
  `https://outercircleapp.com/community/${id}`,
  "_blank"
);
};

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* SAME AS COMMUNITY PAGE */}
      <Navbar />

      {/* ===== CENTERED CONTENT ===== */}
      <main className="pt-20 max-w-3xl mx-auto px-4 space-y-6 pb-10">

        {/* ===== POSTER ===== */}
        <div className="relative rounded-xl overflow-hidden">

          <img
            src={event.image}
            alt="poster"
            className="w-full h-64 object-cover"
          />

          {/* Icons */}
          <div className="absolute top-4 left-4 right-4 flex justify-between">

            <button
              onClick={() => navigate(-1)}
              className="bg-white/90 shadow p-3 rounded-full"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="flex gap-3">
              <button className="bg-white shadow p-3 rounded-full">
                <Share2 size={20} />
              </button>

              <button className="bg-white shadow p-3 rounded-full">
                <Flag size={20} />
              </button>
            </div>

          </div>
        </div>

        {/* ===== TITLE ===== */}
        <h1 className="text-2xl font-semibold">
          {event.title}
        </h1>

        {/* ===== EVENT INFO ===== */}
        <div className="space-y-4">

          <InfoRow
            icon={<Calendar />}
            title="April 1, 2026"
            subtitle="Wednesday, 9:30 PM – 11:59 PM"
          />

          <InfoRow
            icon={<MapPin />}
            title={event.location}
          />

          <InfoRow
            icon={<HelpCircle />}
            title="0 Going"
          />

        </div>

        {/* ===== ORGANIZER ===== */}
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

        {/* ===== ABOUT ===== */}
        <AboutEventSection description={event.description} />

        {/* ===== LOCATION ===== */}
        <div className="pt-6 space-y-3">
          <h2 className="text-lg font-semibold">Location</h2>

          <div className="rounded-xl overflow-hidden">
            <iframe
              src={communityData.location.mapUrl}
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              title="map"
            />
          </div>

          <button className="w-full bg-gray-100 text-pink-400 py-3 rounded-xl flex items-center justify-center gap-2 font-medium">
            <Navigation size={18} />
            Get Directions
          </button>
        </div>

      </main>

    {/* ===== REGISTER BUTTON ===== */}
<div className="pt-6 flex justify-center">
  <button 
     onClick={handleRegister}
     className="bg-[#E31C5D] text-white w-64 py-3 mb-5 rounded-lg font-semibold shadow hover:bg-[#c91852] transition">
  Register
</button>
</div>

      <Footer />

    </div>
  );
};

export default EventDetailsPage;


/* ===== SMALL COMPONENT ===== */

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