import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(loaderRef.current, { opacity: 0, scale: 0.8, duration: 1 })
      .to(loaderRef.current, { opacity: 0, scale: 1.2, duration: 1, delay: 1 });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-primary text-gold flex justify-center items-center text-4xl font-bold z-50"
    >
      Xotrik
    </div>
  );
}
