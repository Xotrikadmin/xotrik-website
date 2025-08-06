import { FaMoon, FaSun } from "react-icons/fa6";
import { useDarkMode } from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setIsDark((prev) => !prev)}
      className="ml-3 text-xl hover:text-[#D4AF37] transition"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
