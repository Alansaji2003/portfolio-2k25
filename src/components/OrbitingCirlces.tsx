import { twMerge } from "tailwind-merge";
import React, { useMemo } from "react";

interface OrbitingCirclesProps {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  className = "",
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) => {
  const calculatedDuration = useMemo(() => duration / speed, [duration, speed]);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);
  const childCount = childrenArray.length;

  const orbitItems = useMemo(() => {
    return childrenArray.map((child, index) => {
      const angle = (360 / childCount) * index;
      return (
        <div
          key={index}
          style={{
            "--duration": `${calculatedDuration}s`,
            "--radius": `${radius}px`,
            "--icon-size": `${iconSize}px`,
            transform: `rotate(${angle}deg)`,
            animationDelay: `${(calculatedDuration / childCount) * index}s`,
          } as React.CSSProperties}
          className={twMerge(
            `absolute flex w-[var(--icon-size)] h-[var(--icon-size)] 
             items-center justify-center rounded-full
             [animation:orbit_var(--duration)_linear_infinite]
             ${reverse ? "[animation-direction:reverse]" : ""}`,
            className
          )}
          {...props}
        >
          {child}
        </div>
      );
    });
  }, [childrenArray, childCount, calculatedDuration, radius, iconSize, reverse, className, props]);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none w-full h-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {orbitItems}
    </>
  );
};
