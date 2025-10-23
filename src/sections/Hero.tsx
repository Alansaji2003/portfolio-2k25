import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";


import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 751px) and (max-width: 1024px)" });

  // GSAP animation with safe initialization
  useGSAP(() => {
    if (document.querySelector(".hero-text h1")) {
      gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
      );
    }
  }, []);

  // Fallback for media queries in older browsers
  const isClient = typeof window !== "undefined";
  const fallbackMobile = isClient && window.innerWidth <= 750;
  const fallbackTablet = isClient && window.innerWidth > 750 && window.innerWidth <= 1024;

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Hero Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/bluespace.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.4,

          }}
        />
        {/* Gradient overlay that fades to black at the bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 80%, #000000 100%)",

          }}
        />
      </div>

      <div className="absolute top-0 left-0 z-10">
        <img
          src="/images/bg.png"
          alt="Background overlay"
          loading="lazy"
        />
      </div>

      <div className="hero-layout relative z-20">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 relative z-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {(Array.isArray(words) ? words : []).map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word?.imgPath || ""}
                          alt={word?.text || "icon"}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          loading="lazy"
                        />
                        <span>{word?.text || ""}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Alan, a developer based in India with a passion for code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
      </div>

      <div className="relative z-20">
        <AnimatedCounter />
      </div>

      {/* Globe positioned responsively for all screen sizes */}
      <div
        className="absolute z-30"
        style={{

          ...(isClient && (isMobile || fallbackMobile) && {
            left: "34%",
            bottom: "43rem",
            transform: "translateX(-50%)",
            width: "450px",
            height: "450px",
          }),
          // Tablet: right side, vertically centered
          ...(isClient && (isTablet || fallbackTablet) && {
            right: "13rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "550px",
            height: "550px",
          }),
          // Desktop: right side, vertically centered, larger
          ...(isClient && !(isMobile || fallbackMobile) && !(isTablet || fallbackTablet) && {
            right: "3rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "600px",
          }),

        }}
      >
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;