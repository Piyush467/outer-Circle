import React from "react";

const ReviewsSection = ({ reviews }) => {
  return (
    <div className="bg-white p-5 mb-5 rounded-2xl shadow text-center">
      <h2 className="font-semibold mb-2">Reviews</h2>

      <div className="text-3xl font-bold">{reviews.rating} / 5</div>
      <p className="text-gray-500">{reviews.total} reviews</p>

      <button className="mt-5 text-[#E31C5D] font-medium">
        Add Review
      </button>
    </div>
  );
};

export default ReviewsSection;