import "./themebutton.css";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeButton() {
  const handleThemeChange = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex items-center gap-2 ">
      <BsSunFill className="text-md text-slate-800 dark:text-slate-50" />
      <input
        onChange={handleThemeChange}
        type="checkbox"
        id="darkmode-toggle"
      />
      <label htmlFor="darkmode-toggle"></label>
      <BsFillMoonFill className="text-md text-slate-800 dark:text-slate-50" />
    </div>
  );
}
