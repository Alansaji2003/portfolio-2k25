import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import SpaceBackground from "./components/spaceBack";
import Hero from "./sections/Hero";
import PerformanceMonitor from "./components/PerformanceMonitor";

// Lazy load heavy components
const About = lazy(() => import("./sections/About"));
const Experience = lazy(() => import("./sections/Experience"));
const Testimonial = lazy(() => import("./sections/Testimonial"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
);

function App() {
  return (
    <>
      <SpaceBackground />
      <NavBar />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Testimonial />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>

      {/* Performance Monitor - Press Ctrl+Shift+P to toggle */}
      <PerformanceMonitor />
    </>
  );
}

export default App;
