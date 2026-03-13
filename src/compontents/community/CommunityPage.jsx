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


// const API_URL =
//   "https://community.xcentinnovations.in/api/website/community/eyJpdiI6InNNTVBPdkRPV045MnJCdDIzNVE3aXc9PSIsInZhbHVlIjoiVkd6VUI5VDloeXRTZ3JhZEFNU1U2QT09IiwibWFjIjoiODJjMWJhOGQ4NTgwNGRlZTg1OTZhYjc3YjlhNTg3OGM1MWNhMDk2NDc4MmQ4ZTM1ZTRjYTE5NjdjNzE5Y2JiNiIsInRhZyI6IiJ9";

// useEffect(() => {
//   fetch(API_URL)
//     .then((res) => res.json())
//     .then((data) => {
//       setCommunity(data.data); // IMPORTANT
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.error("API error:", err);
//       setLoading(false);
//     });
// }, []);

// if (loading) {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       Loading community...
//     </div>
//   );
// }

const handleSubscribe = () => {
  window.open(
    "https://outercircleapp.com/community/eyJpdiI6InNNTVBPdkRPV045MnJCdDIzNVE3aXc9PSIsInZhbHVlIjoiVkd6VUI5VDloeXRTZ3JhZEFNU1U2QT09IiwibWFjIjoiODJjMWJhOGQ4NTgwNGRlZTg1OTZhYjc3YjlhNTg3OGM1MWNhMDk2NDc4MmQ4ZTM1ZTRjYTE5NjdjNzE5Y2JiNiIsInRhZyI6IiJ9",
    "_blank"
  );
};


  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <main className="pt-20 max-w-3xl mx-auto px-4 space-y-6">

       <CommunityHeader data={communityData} />
<CommunityDescription data={communityData} />

<EventsSection event={communityData.event} />

<HostSection host={communityData.host} />

<LocationSection location={communityData.location} />

<ReviewsSection reviews={communityData.reviews} />

<div className="pt-4 pb-2">
  <button
    onClick={handleSubscribe}
    className="mx-auto block bg-[#E31C5D] text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#c91852] transition" >
    Subscribe to Community
  </button>
</div>

      </main>

      <Footer />

    </div>
  );
};

export default CommunityPage;