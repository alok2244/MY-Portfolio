
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


export function Certificate() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:"Data Science BootCamp",
    name: "Udemy",
    title: "Jan 2021",
  },
  {
    quote:"Python (Basic)",
    name: "Udemy",
    title: "Jan 2021",
  },
  {
    quote: "CSS",
    name: "Udemy",
    title: "Jan 2021",
  },
  {
    quote:
      "Problem-Solving",
    name: "Hacker Rank",
    title: "Jan 2023",
  },
  {
    quote:"Js",
    name: "Hacker Rank",
    title: "March 2024",
  },
];
