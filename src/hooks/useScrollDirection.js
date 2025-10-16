// hooks/useScrollDirection.js
import { useState, useEffect } from "react";

export default function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < threshold) {
        ticking = false;
        return;
      }
      setDirection(y > lastY ? "down" : "up");
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}
