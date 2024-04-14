import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to generate a random color
export const getRandomColor = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#ff8000', '#8000ff', '#0080ff', '#ff0080', '#80ff00', '#008000', '#800000', '#808080']; // Add any other colors you want
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};


// Function to generate a random number within a specified range
//@ts-ignore

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};