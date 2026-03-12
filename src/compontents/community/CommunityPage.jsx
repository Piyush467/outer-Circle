import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import CommunityHeader from "./CommunityHeader";
import CommunityDescription from "./CommunityDescription";
import EventsSection from "./EventsSection";
import HostSection from "./HostSection";
import LocationSection from "./LocationSection";
import ReviewsSection from "./ReviewsSection";

import communityData from "./communityData";

const CommunityPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <main className="pt-20 max-w-3xl mx-auto px-4 space-y-6">

        {/* These components use full data */}
        <CommunityHeader data={communityData} />
        <CommunityDescription data={communityData} />

        {/* These need specific props */}
        <EventsSection event={communityData.event} />

        <HostSection host={communityData.host} />

        <LocationSection location={communityData.location} />

        <ReviewsSection reviews={communityData.reviews} />

      </main>

      <Footer />

    </div>
  );
};

export default CommunityPage;