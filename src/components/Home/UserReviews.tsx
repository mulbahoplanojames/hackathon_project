import React from "react";
import Marquee from "../ui/marquee";
import ReviewCard from "./ReviewCard";
import { reviewsData } from "@/constant/constants";

const UserReviews = () => {
  const firstRow = reviewsData.slice(0, reviewsData.length / 2);
  const secondRow = reviewsData.slice(reviewsData.length / 2);

  return (
    <>
      <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden  bg-background  md:pb-24 mb-16">
        <h1 className="lg:text-5xl text-4xl pb-8">What Our Users Say</h1>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
};

export default UserReviews;
