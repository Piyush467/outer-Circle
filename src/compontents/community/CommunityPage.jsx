import React from "react";
import communityData from "./communityData";

import CommunityHeader from "./CommunityHeader";
import CommunityDescription from "./CommunityDescription";
import EventsSection from "./EventsSection";
import HostSection from "./HostSection";
import LocationSection from "./LocationSection";
import ReviewsSection from "./ReviewsSection";

const CommunityPage = () => {
  const data = communityData;

  return (
    <section id="community" className="bg-gray-50 py-16">

      <div className="max-w-5xl mx-auto px-4 space-y-6">

        <CommunityHeader data={data} />
        <CommunityDescription data={data} />
        <EventsSection event={data.event} />
        <HostSection host={data.host} />
        <LocationSection location={data.location} />
        <ReviewsSection reviews={data.reviews} />

      </div>

    </section>
  );
};

export default CommunityPage;