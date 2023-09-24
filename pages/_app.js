import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";
import useSmoothScroll from "@/utils/hooks/useSmoothScroll";
import Navigation from "@/components/navigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const lenisRef = useRef();
  useSmoothScroll(lenisRef);

  // options={{
  //   infinite: true,
  // }}

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{
        smooth: true,
        infinite: true,
      }}
    >
      <Navigation />
      <Component {...pageProps} />
    </ReactLenis>
  );
}
