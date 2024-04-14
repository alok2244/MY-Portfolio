import { HoverEffect } from "./ui/card-hover-effect";

export function Project() {
  return (
    <div className="max-w-6xl mx-auto px-8">

      <HoverEffect 
      //@ts-ignore

      items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Bird Species Detection",
    description:
      "Developed a React Native app for bird detection, integrating Flask for hosting and image processing. Leveraged Expo for cross-platform compatibility, showcasing proficiency in React Native, Flask, and Expo, with emphasis on user-friendly interfaces."
    // link: "https://stripe.com",
  },
  {
    title: "Sentiment Analysis of Twitter Data",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Learning",
    description:
      "A comprehensive platform for learning various courses, articles, and technology. Utilizes React, Next.js, Tailwind CSS, and TypeScript for enhanced user experience and advanced functionality.",
      
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
