import { OrbitingCircles } from "./OrbitingCirlces";
import { skills } from "../constants";

export function Frameworks() {

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice() // avoid mutating original array with reverse()
          .reverse()
          .map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
      </OrbitingCircles>
    </div>
  );
}

interface IconProps {
  src: string;
}

const Icon: React.FC<IconProps> = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" alt="" />
);
