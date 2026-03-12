import React from "react";

const CommunityHeader = ({ data }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white text-gray-900">

      {/* ===== PINK BANNER ===== */}
      <div className="bg-linear-to-r from-pink-500 to-rose-500 h-44 p-5 flex items-center gap-4 relative">

        {/* Frog Image + Text INSIDE banner */}
        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <img src="/logo.png" alt="logo" className="w-12 h-12" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">{data.name}</h1>
          <p className="text-white/90 text-sm">{data.website}</p>
          <p className="text-white/90 text-sm">@{data.instagram}</p>
        </div>

        {/* ===== FLOATING ROW (LOGO + BUTTON) ===== */}
        <div className="absolute bottom-0 left-5 right-5 translate-y-1/2 flex items-center justify-between">

          {/* LEFT — Frog Logo */}
          <div className="w-20 h-20 bg-[#E31C5D] rounded-xl shadow-lg flex items-center justify-center">
            <img src="/logo.png" alt="logo" className="w-12 h-12" />
          </div>

          {/* RIGHT — Subscribe Button */}
          <button className="bg-[#E31C5D] text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:bg-[#c91852] hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-lg">
  Subscribed
</button>

        </div>

      </div>

      {/* ===== CONTENT BELOW (PUSHED DOWN) ===== */}
      <div className="px-5 pb-3 pt-14">

        <h2 className="text-lg font-semibold">{data.name}</h2>
      </div>

    </div>
  );
};

export default CommunityHeader;