import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

interface CardProps {
  style?: React.CSSProperties;
  text?: string;
  image?: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const Card: React.FC<CardProps> = ({ style, text, image, containerRef }) => {
  const cardRef = useRef<HTMLDivElement | HTMLImageElement | null>(null);

  useEffect(() => {
    const el = cardRef.current as HTMLElement | null;
    const bounds = containerRef?.current;
    if (!el || !bounds) return;

    // Hover scaling effect (smooth and elastic)
    const hoverIn = () => {
      gsap.to(el, { scale: 1.05, duration: 0.25, ease: "power2.out" });
    };
    const hoverOut = () => {
      gsap.to(el, { scale: 1, duration: 0.25, ease: "power2.out" });
    };

    el.addEventListener("mouseenter", hoverIn);
    el.addEventListener("mouseleave", hoverOut);

    // Draggable with elastic feel
    Draggable.create(el, {
      type: "x,y",
      bounds,
      edgeResistance: 0.8,
      inertia: true,
      onDragStart() {
        gsap.to(el, { scale: 1.05, duration: 0.2 });
      },
      onRelease() {
        gsap.to(el, {
          x: this.x,
          y: this.y,
          duration: 1.2,
          ease: "elastic.out(1, 0.4)",
        });
        gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
      },
    });

    return () => {
      el.removeEventListener("mouseenter", hoverIn);
      el.removeEventListener("mouseleave", hoverOut);
    };
  }, [containerRef]);

  return image && !text ? (
    <img
      ref={cardRef as React.RefObject<HTMLImageElement>}
      className="absolute w-15 cursor-grab"
      src={image}
      alt={text || "Card image"}
      style={style}
      draggable={false}
    />
  ) : (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      draggable={false}
    >
      {text}
    </div>
  );
};

export default Card;
