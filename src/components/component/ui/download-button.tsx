import { Button } from "./button"

export function DownloadButton() {
  return (
    <Button
      className="rounded-full  border-gray-300 border relative"
      size="icon"
      style={{
        aspectRatio: 1,
      }}
      variant="outline"
    >
      <span className="flex items-center justify-center rounded-full">
        {/* Fade In/Out: Gradually make the icon appear and disappear */}
        {/* <DownloadIcon className="h-5 w-5 fade-in-out" /> */}

        {/* Slide Left: Move the icon horizontally to the left */}
        {/* <DownloadIcon className="absolute h-5 w-5 animate-slide-left opacity-50" style={{ animationDuration: "1s" }} /> */}

        {/* Scale: Gradually increase or decrease the size of the icon */}
        {/* <DownloadIcon className="absolute h-5 w-5 animate-scale opacity-50" style={{ animationDuration: "1s", animationDelay: "0.2s" }} /> */}

        {/* Rotate: Rotate the icon around its center */}
        {/* <DownloadIcon className="absolute h-5 w-5 animate-rotate opacity-50" style={{ animationDuration: "1s", animationDelay: "0.4s" }} /> */}

        {/* Color Change: Change the color of the icon gradually */}
        {/* <DownloadIcon className="absolute h-5 w-5 animate-color-change opacity-50" style={{ animationDuration: "10s", animationDelay: "0.6s" }} /> */}

        {/* Pulse: Make the icon expand and contract rhythmically */}
        <DownloadIcon className="absolute h-5 w-5 animate-pulse opacity-50 text-white font-bold" style={{ animationDuration: "1s", animationDelay: "0.8s" }} />

        {/* Shake: Move the icon back and forth rapidly */}
        {/* <DownloadIcon className="absolute h-5 w-5 animate-shake opacity-50" style={{ animationDuration: "1s", animationDelay: "1s" }} /> */}

        {/* Bounce: Make the icon bounce up and down */}
        {/* <DownloadIcon className="absolute h-5 w-5 animate-bounce opacity-50" style={{ animationDuration: "1s", animationDelay: "1.2s" }} /> */}

        {/* Flip: Rotate the icon 180 degrees around its axis */}
        {/* <DownloadIcon className="absolute h-5 w-5 animate-flip opacity-50" style={{ animationDuration: "1s", animationDelay: "1.4s" }} /> */}

        {/* Glow: Add a glowing effect around the icon */}
        {/* <DownloadIcon className="absolute h-5 w-5 animate-glow opacity-50" style={{ animationDuration: "1s", animationDelay: "1.6s" }} /> */}
      </span>
      <span className="sr-only">Download</span>
    </Button>
  )
}

//@ts-ignore
function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}
