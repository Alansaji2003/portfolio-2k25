
import { Globe } from "../../globe";

const HeroExperience = () => {
  
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