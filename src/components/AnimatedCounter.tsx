import { useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement[]>([]);
  const hasAnimated = useRef(false);

  // Optimized animation function
  const animateCounters = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      if (!numberElement) return;

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation with optimized settings
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        delay: index * 0.1, // Stagger animation
        onUpdate: function() {
          const currentValue = Math.round(this.targets()[0].innerText);
          numberElement.textContent = `${currentValue}${item.suffix}`;
        },
        onComplete: () => {
          if (numberElement) {
            numberElement.textContent = `${item.value}${item.suffix}`;
          }
        },
      });
    });
  }, []);

  useGSAP(() => {
    // Use ScrollTrigger with optimized settings
    ScrollTrigger.create({
      trigger: "#counter",
      start: "top 80%",
      once: true, // Only trigger once for better performance
      onEnter: animateCounters,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === counterRef.current) {
          trigger.kill();
        }
      });
    };
  }, [animateCounters]);

  // Intersection Observer fallback for better performance
  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [animateCounters]);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) countersRef.current[index] = el;
            }}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center transform-gpu"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
