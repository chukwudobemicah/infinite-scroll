import gsap from "gsap";
import { useEffect } from "react";

export default function useSmoothScroll(ref) {
  useEffect(() => {
    function update(time) {
      ref.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
}
