import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useLoopScroll(containerRef) {
  useEffect(() => {
    const container = containerRef.current;

    console.log(document.querySelector("img"));

    const repeatItems = (parentEl, total = 0) => {
      const items = [...parentEl.children];
      for (let i = 0; i <= total - 1; i++) {
        const cln = items[i].cloneNode(true);
        parentEl.appendChild(cln);
      }
    };

    repeatItems(container, 2);

    let ctx = gsap.context(() => {
      gsap.to(gsap.utils.toArray(".svg-container"), {
        startAt: { scaleY: 1 },
        scaleY: 0,
        scrollTrigger: {
          //   trigger: gsap.utils.toArray(".svg-container"),
          trigger: ".svg-container",
          scrub: 2,
          start: "bottom 90%",
        },
      });

      gsap.to(gsap.utils.toArray(".image-container"), {
        startAt: { scale: 0 },
        scale: 1,
        scrollTrigger: {
          duration: 2,
          scrub: 2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
}
