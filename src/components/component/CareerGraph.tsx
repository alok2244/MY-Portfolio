import { useState } from 'react';
import { useEffect } from 'react';

//@ts-ignore
import backgroundImage from '../../../public/asset/bg1.jpg';


const CareerGraph = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredData, setHoveredData] = useState({ date: '', age: '' });
  const [hoveredPosition, setHoveredPosition] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHidden(window.innerWidth < 640); // Assuming 640px is the breakpoint for 'sm'
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //@ts-ignore
  const handleMouseEnter = (date, age, position) => {
    setIsHovered(true);
    setHoveredData({ date, age });
    setHoveredPosition(position);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full flex align-middle justify-center">
      <div className="lg:h-[550px] sm:h-96 w-full md:w-[80%] border-2 rounded-2xl flex flex-wrap content-evenly items-center justify-center relative" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="border-2 border-l-0 border-r-0 w-full flex flex-wrap justify-center py-2 ">
          <div className="w-full md:w-[80%] flex justify-center items-center text-3xl md:text-6xl font-mono font-bold">Career Growth</div>
          {!isHidden && (

          <div className="  w-full md:w-[80%] flex justify-center text-sm text-gray-500 font-mono italic">The Rings can do much!</div>
          )}
        </div>
        <div className="w-full h-[300px]">
          <div className="flex justify-center items-center h-20 overflow-x-scroll md:overflow-hidden">
            {/* Rings and Lines */}
            <RingIcon strokeWidth={4} fill="green" onMouseEnter={() => handleMouseEnter('First Breadth', 'Born and started race ', '10%')} onMouseLeave={() => handleMouseLeave()} />
            <HorizontalLineIcon size={130} />
            <RingIcon strokeWidth={4} fill="green" onMouseEnter={() => handleMouseEnter('10th', 'Completed 10th', '25%')} onMouseLeave={() => handleMouseLeave()} />
            <HorizontalLineIcon size={130} />
            <RingIcon strokeWidth={4} fill="green" onMouseEnter={() => handleMouseEnter('12th', 'Completed 12th', '40%')} onMouseLeave={() => handleMouseLeave()} />
            <HorizontalLineIcon size={130} />
            <RingIcon strokeWidth={4} fill="green" onMouseEnter={() => handleMouseEnter('Bsc CS', 'First professional Degree', '55%')} onMouseLeave={() => handleMouseLeave()} />
            <HorizontalLineIcon size={130} />
            <RingIcon strokeWidth={4} fill="green" onMouseEnter={() => handleMouseEnter('MCA', 'Completed the post graduation', '70%')} onMouseLeave={() => handleMouseLeave()} />
            <HorizontalLineIcon size={130} />
            <RingIcon strokeWidth={4} fill="yellow" blink={true} onMouseEnter={() => handleMouseEnter('ASE', 'ASE at Accenture first step into the IT career', '85%')} onMouseLeave={() => handleMouseLeave()} />
            <DottedLineIcon size={130} />
            <RingIcon strokeWidth={4} onMouseEnter={() => handleMouseEnter('2023', '24', 'auto')} onMouseLeave={() => handleMouseLeave()} />
          </div>
          <div className="lg:text-3xl sm:text-xs md:text-base font-bold flex justify-evenly">
            <div className="text-green-700">1999</div>
            <div className="text-green-700">2016</div>
            <div className="text-green-700">2018</div>
            <div className="text-green-700">2021</div>
            <div className="text-green-700">2023</div>
            <div className="text-yellow-300">09/2023</div>
            <div>20XX</div>
          </div>
         { !isHidden && (

          <div className=" w-full mt-10 flex justify-center">
            {isHovered && (
              <div className={`absolute py-5 grid justify-center bg-white border w-1/2 border-gray-300 p-2 rounded-full right-${hoveredPosition}`}>
                <div className="flex justify-center">Step: {hoveredData.date}</div>
                <div className="flex justify-center">{hoveredData.age}</div>
              </div>
            )}
          </div>)}
        </div>
      </div>
    </div>
  );
};

// Other components remain the same


//@ts-ignore
function HorizontalLineIcon(props) {
  const { size = 50, strokeWidth = 2, strokeColor = 'currentColor', ...otherProps } = props;
  const halfSize = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} {...otherProps}>
      <line x1={0} y1={halfSize} x2={size} y2={halfSize} stroke={strokeColor} strokeWidth={strokeWidth} />
    </svg>
  );
}

//@ts-ignore

function DottedLineIcon(props) {
  const { size = 150, strokeWidth = 2, strokeColor = 'currentColor', dashArray = '4 4', ...otherProps } = props;
  const halfSize = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} {...otherProps}>
      <line x1={0} y1={halfSize} x2={size} y2={halfSize} stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray={dashArray} />
    </svg>
  );
}

//@ts-ignore

function RingIcon(props) {
  const { size = 24, strokeWidth = 2, strokeColor = 'currentColor', fill = 'none', blink = false, blinkInterval = 500, ...otherProps } = props;
  const radius = size / 2 - strokeWidth / 2;
  const [isBlinking, setIsBlinking] = useState(blink);

  //@ts-ignore
  useEffect(() => {
    //@ts-ignore
    let intervalId;
    if (blink) {
      intervalId = setInterval(() => {
        //@ts-ignore
        setIsBlinking(prevState => !prevState);
      }, blinkInterval);
    }
    //@ts-ignore

    return () => clearInterval(intervalId);
  }, [blink, blinkInterval]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} {...otherProps}>
      {isBlinking ? (
        <circle cx={size / 2} cy={size / 2} r={radius} fill={strokeColor} />
      ) : (
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={strokeColor} strokeWidth={strokeWidth} fill={fill} />
      )}
    </svg>
  );
}


export default CareerGraph;
