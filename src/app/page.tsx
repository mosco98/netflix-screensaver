/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { default as NextImage } from "next/image";
import { useEffect, useState } from "react";

const MOVIES = [
  {
    logo: {
      url: "/bridgerton-logo.png",
      width: 500,
      height: 500
    },
    tags: ["Swoonworthy", "Witty", "Emotional"],
    cover: "/bridgerton-cover.jpg",
    isSeries: true
  },
  {
    logo: {
      url: "/breaking-bad.svg",
      width: 300,
      height: 300
    },
    tags: ["Violent", "Gritty", "Dark"],
    cover: "/breaking-bad-cover2.jpg",
    isSeries: true
  },
  {
    logo: {
      url: "/rebel-moon-logo.png",
      width: 450,
      height: 300
    },
    tags: ["Imaginative", "Exciting"],
    cover: "/rebel-moon-cover.jpg",
    isSeries: false
  },
  {
    logo: {
      url: "/bloodshot-logo.png",
      width: 450,
      height: 300
    },
    tags: ["Violent", "Action", "Adventurous"],
    cover: "/bloodshot-cover.jpg",
    isSeries: false
  },
  {
    logo: {
      url: "/blood-of-zeus.png",
      width: 450,
      height: 300
    },
    tags: ["Violent", "Action", "Anime"],
    cover: "/blood-of-zeus-cover2.jpg",
    isSeries: true
  },
  {
    logo: {
      url: "/peaky-blinders-logo.png",
      width: 350,
      height: 200
    },
    tags: ["Violent", "Witty", "Action"],
    cover: "/peaky-blinders-cover2.jpg",
    isSeries: true
  },
  {
    logo: {
      url: "/bad-boys-for-life-logo.png",
      width: 400,
      height: 200
    },
    tags: ["Explosive", "Exciting", "Comedy"],
    cover: "/bad-boys-for-life-cover.jpg",
    isSeries: false
  },
  // {
  //   logo: {
  //     url: "/how-to-get-away-with-murder-logo.png",
  //     width: 400,
  //     height: 400
  //   },
  //   tags: ["Drama", "Suspenseful", "Thriller"],
  //   cover: "/how-to-get-away-with-murder-cover.jpg",
  //   isSeries: true
  // },
  {
    logo: {
      url: "/black-clover-logo.png",
      width: 500,
      height: 200
    },
    tags: ["Imaginative", "Goofy", "Exciting"],
    cover: "/black-clover-cover.jpg",
    isSeries: true
  },
  {
    logo: {
      url: "/the-rookie-logo.png",
      width: 500,
      height: 200
    },
    tags: ["Exciting", "Funny", "Action"],
    cover: "/the-rookie-cover.jpg",
    isSeries: true
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % MOVIES.length;
    const src = MOVIES[nextIndex].cover;

    const img = new Image();
    img.src = src;
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % MOVIES.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {MOVIES.map(
          (movie, i) =>
            currentIndex === i && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1.7
                  }
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 2,
                    delay: 1.6
                  }
                }}
                className="h-dvh w-dvw overflow-hidden fixed flex items-center justify-center"
                key={i}
              >
                <motion.div
                  className="box-content absolute h-dvh w-dvw py-6"
                  style={{
                    backgroundImage: `url(${movie.cover})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}
                  initial={{
                    x: 200 * (i % 2 === 0 ? 1 : -1),
                    paddingLeft: i % 2 === 0 ? 400 : 0,
                    paddingRight: i % 2 !== 0 ? 400 : 0
                  }}
                  animate={{
                    x: 0
                  }}
                  transition={{
                    duration: 14,
                    ease: "easeInOut"
                  }}
                ></motion.div>

                <div className="fixed w-full h-full left-0 bg-gradient-to-b from-transparent to-black md:to-black/50 px-3 py-6 md:p-[4rem] flex items-end z-30">
                  <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-20 md:gap-0">
                    <div className="flex flex-col gap-6 md:gap-10">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                            delay: 2
                          }
                        }}
                        exit={{
                          opacity: 0,
                          transition: {
                            duration: 0.3,
                            delay: 1.5
                          }
                        }}
                      >
                        <div className="flex items-center gap-1.5 font-medium">
                          <NextImage
                            src={"/symbol.png"}
                            width={35}
                            height={68}
                            alt=""
                          />

                          <p className="text-lg tracking-[0.3em]">
                            {movie.isSeries ? "SERIES" : "FILM"}
                          </p>
                        </div>

                        <div className="px-3 mt-0">
                          <NextImage
                            src={movie.logo.url}
                            width={movie.logo.width}
                            height={movie.logo.height}
                            alt=""
                            className="overflow-hidden"
                            priority
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                            delay: 2.6
                          }
                        }}
                        exit={{
                          opacity: 0,
                          transition: {
                            duration: 0.3,
                            delay: 1.1
                          }
                        }}
                        className="px-2 text-xl flex items-center gap-4"
                      >
                        {movie.tags.map((tag, i) => (
                          <div className="flex items-center gap-4" key={i}>
                            <p>{tag}</p>
                            {i + 1 !== movie.tags.length && (
                              <span className="bg-gray-400 h-2 w-2 rounded-full"></span>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    </div>
                    <div>
                      <NextImage
                        src={"/logo.png"}
                        className="overflow-hidden"
                        width={200}
                        height={200}
                        alt=""
                      />

                      <p className="text-sm md:text-center text-gray-300 font-medium">
                        <span>Recreated by</span>{" "}
                        <a href="https://x.com/meandchimso" target="_blank">
                          @meandchimso
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
