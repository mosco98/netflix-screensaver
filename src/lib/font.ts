import localFont from "next/font/local";

export const nextflixSans = localFont({
  variable: "--font-netflix-sans",
  src: [
    {
      path: "./fonts/NetflixSans-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/NetflixSans-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/NetflixSans-Bold.otf",
      weight: "700",
      style: "normal"
    }
  ]
});
