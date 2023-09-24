import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useLoopScroll from "@/utils/hooks/useLoopScroll";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  useLoopScroll(containerRef);

  return (
    <main
      ref={containerRef}
      className="flex flex-col gap-24 max-w-[95%] mx-auto my-10"
    >
      <div className="svg-container item max-w-full w-full flex flex-col justify-center h-[90vh]">
        <svg
          className="svg w-full max-w-full h-[90%] min-h-[90%] max-h-[90%]"
          viewBox="0 0 503 277"
          preserveAspectRatio="none"
        >
          <path
            d="M56.3 232.3 56.3 193.8C56.3 177.4 54.7 174.1 48.5 165.9 35.4 148.8 17.6 133 8.5 120.8.7 110.3.1 103.7.1 85.6L.1 45.2C.1 14.9 13.5.5 41 .5 68.8.5 79.1 15.3 79.1 45.2L79.1 94.5 56.9 94.5 56.9 48.5C56.9 35 53.5 25.8 40.7 25.8 29.8 25.8 24.1 32.4 24.1 45.2L24.1 85.3C24.1 96.8 25.1 100.1 29.8 106.3 41 121.8 59.1 137.6 68.8 150.4 77.2 161.6 80 169.8 80 193.5L80 232.3C80 260.9 68.8 277 40.4 277 12.3 277 .1 261.5.1 232.3L.1 174.7 22.9 174.7 22.9 228.7C22.9 243.1 26.9 252.3 40.1 252.3 51.6 252.3 56.3 245.1 56.3 232.3ZM176.5 277 101.5 277 101.5.5 127.1.5 127.1 251.8 176.5 251.8 176.5 277ZM290 277 264.5 277 258.4 230.6 217.1 230.6 211 277 186.2 277 224.1.5 254.1.5 290 277ZM218.1 207.1 253.4 207.1C247.7 159.7 241.6 114 236.3 65.3 230.5 114 224.5 159.7 218.1 207.1ZM399.6 277 374 277 326.3 75.1C326.6 117.1 326.6 155.7 326.6 197.7L326.6 277 304.5 277 304.5.5 335 .5 377.4 203.1C377 165.1 377 129.2 377 91.2L377 .5 399.6.5 399.6 277ZM471.5 277 446.3 277 446.3 26.3 415.3 26.3 415.3.5 502.4.5 502.4 26.3 471.5 26.3 471.5 277Z"
            id="SLANT"
            fill="#fff"
          ></path>
        </svg>
        <p className="mx-auto">
          An infinite scrolling demo based on
          <span>Bureau DAM</span>
        </p>
      </div>
      <div className="image-container mx-auto h-[90vh]">
        <Image
          className="image item w-full h-full min-w-full min-h-full z-30"
          src="/1.jpg"
          width="800"
          height="533"
          alt="pic of woman"
          priority
        />
      </div>
    </main>
  );
}
