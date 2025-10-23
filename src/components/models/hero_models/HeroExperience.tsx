import { useMediaQuery } from "react-responsive";
import { Globe } from "../../globe";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 10px 10px 10px' // top, right, bottom, left - extra space on top and right
      }}
    >
      <Globe
        className="w-full h-full"
       
      />
    </div>
  );
};

export default HeroExperience;