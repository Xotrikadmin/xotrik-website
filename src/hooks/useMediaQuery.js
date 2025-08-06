import { useEffect, useState } from "react";

/**
 * Devuelve true cuando la media-query se cumple.
 * @param {string} query — por ejemplo "(min-width: 1024px)"
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
