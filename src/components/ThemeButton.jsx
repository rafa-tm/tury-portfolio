import { useTheme } from "../hooks/useTheme";
import { MdCloud, MdDarkMode, MdStar, MdSunny } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  function toglleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <button onClick={() => toglleTheme()} className="shadow-lg">
      <div className="w-20 h-10 px-2 relative flex items-center justify-between rounded-lg bg-blue-800 dark:bg-gray-950 shadow-inner shadow-gray-800 dark:shadow-gray-800">
        <MdSunny size={28} className="text-yellow-400 dark:text-transparent" />
        <MdDarkMode size={28} className="text-transparent dark:text-gray-100" />
        <div className="absolute top-0 left-0 w-full h-full text-transparent dark:text-yellow-200">
          <MdStar size={10} className="absolute left-4 top-1  " />
          <MdStar size={10} className="absolute left-2 top-5   " />
          <MdStar size={10} className="absolute left-6 top-7  " />
        </div>
        <div className="absolute top-0 left-0 w-full h-full text-white dark:text-transparent overflow-hidden">
          <MdCloud size={24} className="absolute right-2 -bottom-2" />
          <MdCloud size={24} className=" absolute -right-2 bottom-1" />
          <MdCloud size={8} className="absolute right-4 bottom-6" />
        </div>
      </div>
    </button>
  );
}
