import  { useEffect, useState } from 'react';

const MovingText = () => {
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
  useEffect(() => {
    const spans = document.querySelectorAll('.random-delay') as NodeListOf<HTMLElement>;
    spans.forEach(span => {
      const randomDelay = Math.random() * 10; // Generates a random delay between 0 and 10 seconds
      span.style.animationDelay = `${randomDelay}s`;
    });
  }, []);


  return (
    !isHidden && (
    <div className="s w-full overflow-hidden flex justify-start">
      <div className="inline-block whitespace-nowrap w-full">
        {/* Repeat the text for the desired length */}
        <div className="animate-marquee-left py-10">
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-yellow-700">Python</span>
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-blue-700">Java</span>
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-green-700">Data Structure</span>
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-purple-700">C</span>
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-indigo-700">HTML</span>
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-yellow-700">Python</span>
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-blue-700">Java</span>
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-green-700">Data Structure</span>
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-purple-700">C</span>
          <span className="text-white text-xl px-8 py-5 mx-10 font-bold rounded-lg random-delay bg-indigo-700">HTML</span>
          
        </div>
        <div className="animate-marquee-right py-10 flex justify-end">
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-pink-700">CSS</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-gray-700">AJAX</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-teal-700">React</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-yellow-700">React Native</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-blue-700">JS</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-pink-700">CSS</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-gray-700">AJAX</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-teal-700">React</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-yellow-700">React Native</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-blue-700">JS</span>
          

        </div>
        <div className="animate-marquee-left py-10">
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-green-700">NextJS</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-purple-700">Flask</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-indigo-700">Machine Learning</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-pink-700">Natural Language Processing</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-gray-700">Data Science</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-green-700">NextJS</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-purple-700">Flask</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-indigo-700">Machine Learning</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-pink-700">Natural Language Processing</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-gray-700">Data Science</span>
        </div>
        <div className="animate-marquee-right py-10 flex justify-end">
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-teal-700">SAP</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-yellow-700">.Net</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-blue-700">Asp.NET</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-green-700">SQL</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-purple-700">JQuery</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-teal-700">SAP</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-yellow-700">.Net</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-blue-700">Asp.NET</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-green-700">SQL</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-purple-700">JQuery</span>
        </div>
        <div className="animate-marquee-left py-10 ">
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-indigo-700">C#</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-yellow-700">.Net</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-blue-700">Asp.NET</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-green-700">SQL</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-purple-700">JQuery</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-green-700">NextJS</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-purple-700">Flask</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-indigo-700">Machine Learning</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-pink-700">Natural Language Processing</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-blue-700">JS</span>

        </div>
        <div className="animate-marquee-right py-10 flex justify-end">
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-pink-700">React</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-gray-700">NextJS</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-teal-700">Flask</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-yellow-700">Machine Learning</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-blue-700">Natural Language Processing</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-pink-700">React</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-gray-700">NextJS</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-teal-700">Flask</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-yellow-700">Machine Learning</span>
          <span className="text-white text-xl px-8 py-5 mx-10  font-bold rounded-lg random-delay bg-blue-700">Natural Language Processing</span>
        </div>
        {/* Repeat the text for the desired length */}
      </div>
    </div>
    )
  );
};

export default MovingText;
