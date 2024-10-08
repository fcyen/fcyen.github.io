"use client";

import { ComingSoon } from "@/components/ComingSoon";
import { TravelPostGrid } from "@/components/travels/TravelPostGrid";
import { useEffect, useRef, useMemo } from "react";
import { allTravelPosts } from 'contentlayer/generated';

export default function Travels() {
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const requestRef = useRef(null);

  const handleScroll = useMemo(() => {
    if (!requestRef.current) {
      //TODO: fix this error on build: "requestAnimationFrame is not defined"
      // requestRef.current = requestAnimationFrame(updateZoom);
    }
  }, []);

  const updateZoom = () => {
    const scrollPosition = window.scrollY;
    const image = imageRef.current;

    if (image) {
      console.log(scrollPosition);
      let scale = 1 + scrollPosition / 400; // Adjust the divisor to control the zoom aggressiveness
      scale = Math.min(scale, 5); // Max scale
      scale = Math.max(scale, 1); // Min scale
      image.style.transform = `scale(${scale})`;
      image.style.opacity = 1.5 - scrollPosition / 800; // Adjust the divisor to control the fade out aggressiveness
    }

    requestRef.current = null;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Set the height of the image container to twice the height of image
  useEffect(() => {
    if (imageRef.current) {
      const height = imageRef.current.getBoundingClientRect().height * 1.5;
      imageContainerRef.current.style.maxHeight = `${height}px`;
    }
  }, []);

  return (
    // <ComingSoon />
    <TravelPostGrid posts={allTravelPosts} />
    // <div className="grid min-h-screen justify-center">
    //   <div className="relative w-full" ref={imageContainerRef}>
    //     <img alt="Bali" src="/images/bali-main.jpg" ref={imageRef} />
    //   </div>
    // </div>
  );
}
