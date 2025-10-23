import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
import TitleHeader from "../components/TitleHeader";
import type { FC } from "react";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface Review {
  img: string;
  name: string;
  username: string;
  body: string;
}

const ReviewCard: FC<Review> = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-[#0E0E10] hover:bg-[#1a1a1a] hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width={32}
          height={32}
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonial: FC = () => {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <TitleHeader
        title="Hear From My Clients"
        sub="💬 What people say about my work"
      />
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
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
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-black to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
};

export default Testimonial;
